import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "white",
		justifyContent: "space-between",
	},
	text: {
		fontFamily: "Ubuntu-Medium",
		fontSize: 18,
		color: "#333",
	},
	button: {
		padding: 10,
		backgroundColor: "#007BFF",
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		textAlign: "center",
	},
});

export default globalStyles;
