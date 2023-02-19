import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../App";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      console.log('User registered successfully:', user);
    } catch (error) {
      console.log('Error registering user:', error);
    }
  }

  return (
    <View>
      <TextInput placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

export default Register;
