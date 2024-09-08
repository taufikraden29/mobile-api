import {
	Image,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect } from "react";
import globalStyles from "../utils/styles";
import { Circle } from "react-native-animated-spinkit";
import { logo_app, Logos } from "../images";

import { StackActions } from "@react-navigation/native";
import colors from "../utils/colors";
import gradients from "../utils/gradients";
import LinearGradient from "react-native-linear-gradient";

const Splashscreen = ({ navigation }) => {
	// useEffect(() => {
	// 	const interval = setTimeout(() => {
	// 		navigation.dispatch(StackActions.replace("Login"));
	// 	}, 3000);
	// }, []);

	return (
		<View
			style={[
				globalStyles.container,

				{ alignItems: "center", justifyContent: "center" },
			]}
		>
			<StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
			<View style={styles.content}>
				<View>
					<Image
						source={logo_app}
						style={{
							height: 70,
							width: 180,
							resizeMode: "contain",
						}}
					/>
					<Text style={[globalStyles.text, { color: colors.gray1 }]}>
						Everybody Can Train
					</Text>
				</View>
				<View>
					<TouchableOpacity style={[styles.container, { width: "100%" }]}>
						<LinearGradient
							colors={gradients.primaryGradient}
							style={styles.bgLinier}
						>
							<Text style={styles.text}>Hello, Gradient!</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
			{/* <Circle size={35} color="#EB3678" style={{ margin: 30 }}></Circle> */}
		</View>
	);
};

export default Splashscreen;

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: "space-around",
	},
	bgLinier: {
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 16,
		fontFamily: "Ubuntu-Bold",
		color: "white",
	},
});
