import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, LoginScreen, SplashScreen } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Splash"
					component={SplashScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

const styles = StyleSheet.create({});
