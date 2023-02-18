import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from "./app/components/auth/Landing";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // This creates a navigation container that wraps your app's screens and provides navigation context to all child components.
    <NavigationContainer>
      {/* Inside navigation container we will use Stack Navigators */}
      <Stack.Navigator initialRouteName="Landing">
        {/* This will be our initial or first screen of our app hence the name Landing! */}
        <Stack.Screen name="Landing" component={LandingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
