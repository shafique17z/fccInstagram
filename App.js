import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import LandingScreen from "./app/components/auth/Landing";
import RegisterScreen from "./app/components/auth/Register";
import LoginScreen from "./app/components/auth/Login";
import { auth } from "./app/config/firebase";

const Stack = createNativeStackNavigator();

export default function App() {
  //isLoaded is for if user is logged out
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsLoaded(true);
        setIsLoggedIn(false);
      } else {
        setIsLoaded(true);
        setIsLoggedIn(true);
      }
    });
  }, []);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>loading and isLoaded = {isLoaded} </Text>
      </View>
    );
  }

  if (!isLoggedIn) {
    return (
      // This creates a navigation container that wraps your app's screens and provides navigation context to all child components.
      <NavigationContainer>
        {/* Inside navigation container we will use Stack Navigators */}
        <Stack.Navigator initialRouteName="Landing">
          {/* This will be our initial or first screen of our app hence the name Landing! */}
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "blue" }}>user is logged in </Text>
    </View>
  );
}
