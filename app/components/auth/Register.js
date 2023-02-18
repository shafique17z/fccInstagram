import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    // perform registration logic with name, email, and password -- May be we can use Parse to manage user registration
  }

  return (
    <View>
      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
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
