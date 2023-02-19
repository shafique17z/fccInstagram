import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./app/components/auth/Landing";
import RegisterScreen from "./app/components/auth/Register";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHUZIsTXn2wUQKfZ-y_VIvrh6ai7nkPWM",
  authDomain: "fcc-instagram-b80dd.firebaseapp.com",
  projectId: "fcc-instagram-b80dd",
  storageBucket: "fcc-instagram-b80dd.appspot.com",
  messagingSenderId: "316311931387",
  appId: "1:316311931387:web:6e0f35ae264bfcceae235e",
  measurementId: "G-VBQKYEMQSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // This creates a navigation container that wraps your app's screens and provides navigation context to all child components.
    <NavigationContainer>
      {/* Inside navigation container we will use Stack Navigators */}
      <Stack.Navigator initialRouteName="Landing">
        {/* This will be our initial or first screen of our app hence the name Landing! */}
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
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
