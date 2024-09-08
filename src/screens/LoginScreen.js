import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../utils/styles";

const LoginScreen = () => {
	return (
		<View style={[globalStyles.container]}>
			<StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
			<Text>LoginScreen</Text>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});
