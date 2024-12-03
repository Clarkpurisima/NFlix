import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/your-background-image.jpg' }} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Your <Text style={styles.titleAccent}>NFlix</Text> Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0B0B0"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#B0B0B0"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
        />

        <Link href="home" style={styles.signupButton} onPress={handleSignup}>Sign up</Link>
        <Link style={styles.loginLink} href="login">Already have an account? Log in</Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  titleAccent: {
    color: '#E50914',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#333333',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#222222',
    color: '#FFFFFF',
  },
  signupButton: {
    backgroundColor: '#E50914',
    padding: 15,
    borderRadius: 5,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 15,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default SignupScreen;
