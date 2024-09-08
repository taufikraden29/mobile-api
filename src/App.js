import React, { useState } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const App = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showPicker, setShowPicker] = useState(false);
	const [filteredSuccess, setFilteredSuccess] = useState([]);
	const [filteredFailed, setFilteredFailed] = useState([]);
	const [activeFilter, setActiveFilter] = useState("success"); // Track active/inactive filter

	const dataSukses = [
		{
			created_at: "Monday 06-09-2024 10:13",
			name: "Transaksi Kuota",
		},
		{
			created_at: "Monday 05-09-2024 10:13",
			name: "Transaksi Pulsa",
		},
		{
			created_at: "Monday 01-10-2024 10:13",
			name: "Transaksi Kuota",
		},
	];

	const dataGagal = [
		{
			created_at: "Monday 06-09-2024 09:00",
			name: "Transaksi Gagal - Kuota",
		},
		{
			created_at: "Monday 05-09-2024 11:00",
			name: "Transaksi Gagal - Pulsa",
		},
	];

	const parseDate = (dateString) => {
		const parts = dateString.split(" ");
		const [day, month, year] = parts[1].split("-");
		const time = parts[2].replace(/\./g, ":");
		const formattedDateString = `${year}-${month}-${day}T${time}:00`;
		return new Date(formattedDateString);
	};

	const handleDateChange = (event, date) => {
		if (date) {
			setShowPicker(false);
			setSelectedDate(date);

			// Filter data sukses
			const filteredSukses = dataSukses.filter((item) => {
				const itemDate = parseDate(item.created_at);
				return itemDate.toDateString() === date.toDateString();
			});

			// Filter data gagal
			const filteredGagal = dataGagal.filter((item) => {
				const itemDate = parseDate(item.created_at);
				return itemDate.toDateString() === date.toDateString();
			});

			setFilteredSuccess(filteredSukses);
			setFilteredFailed(filteredGagal);
		}
	};

	const handleReset = () => {
		setSelectedDate(new Date());
		setFilteredSuccess(dataSukses);
		setFilteredFailed(dataGagal);
	};

	return (
		<View style={{ padding: 20 }}>
			<Text>Date: {selectedDate.toDateString()}</Text>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginVertical: 20,
				}}
			>
				<TouchableOpacity onPress={() => setShowPicker(true)}>
					<Text>Filter by Date</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleReset}>
					<Text>Reset</Text>
				</TouchableOpacity>
			</View>

			{showPicker && (
				<DateTimePicker
					mode="date"
					display="default"
					value={selectedDate}
					onChange={handleDateChange}
				/>
			)}

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[
						styles.button,
						activeFilter === "success" && styles.activeButton,
					]}
					onPress={() => setActiveFilter("success")}
				>
					<Text style={styles.buttonText}>Transaksi Sukses</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.button,
						activeFilter === "failed" && styles.activeButton,
					]}
					onPress={() => setActiveFilter("failed")}
				>
					<Text style={styles.buttonText}>Transaksi Gagal</Text>
				</TouchableOpacity>
			</View>

			<View>
				{activeFilter === "success" && (
					<>
						<Text style={styles.headerText}>Transaksi Sukses</Text>
						{filteredSuccess.length > 0 ? (
							<FlatList
								data={filteredSuccess}
								keyExtractor={(item, index) => index.toString()}
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) => (
									<View style={styles.containerListItem}>
										<Text>{item.created_at}</Text>
										<Text>{item.name}</Text>
									</View>
								)}
							/>
						) : (
							<Text>Tidak ada transaksi sukses pada tanggal ini</Text>
						)}
					</>
				)}

				{activeFilter === "failed" && (
					<>
						<Text style={styles.headerText}>Transaksi Gagal</Text>
						{filteredFailed.length > 0 ? (
							<FlatList
								data={filteredFailed}
								keyExtractor={(item, index) => index.toString()}
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) => (
									<View style={styles.containerListItem}>
										<Text>{item.created_at}</Text>
										<Text>{item.name}</Text>
									</View>
								)}
							/>
						) : (
							<Text>Tidak ada transaksi gagal pada tanggal ini</Text>
						)}
					</>
				)}
			</View>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	containerListItem: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	headerText: {
		fontSize: 18,
		fontWeight: "bold",
		marginVertical: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 20,
	},
	button: {
		padding: 10,
		backgroundColor: "#ccc",
		borderRadius: 5,
	},
	activeButton: {
		backgroundColor: "#007bff",
	},
	buttonText: {
		color: "#fff",
	},
});
