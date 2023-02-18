import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from "./app/components/auth/Landing";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //The whole app needs to be inside a navigation container which manages navigation b/w routes
    <NavigationContainer>
      {/* Inside navigation container we will use Stack Navigation as I have previously done */}
      <Stack.Navigator initialRouteName="Landing">
        {/* This will be our initial or first screen in the Stack */}
        <Stack.Screen name="Screen" component={LandingScreen}/>
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
