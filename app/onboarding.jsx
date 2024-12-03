import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const Onboarding = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGt94ludgtqDWp0bB3xQjHv3Z84RySNir2A&s' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME TO NFLIX</Text>
        <Text style={styles.subtitle}>Your gateway to endless entertainment.</Text>

        {/* Log In Button */}
        <Link href="/Login" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </Link>

        {/* Sign Up Button */}
        <Link href="/Signup" asChild>
          <TouchableOpacity style={styles.buttonOutline}>
            <Text style={styles.buttonTextOutline}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF4500',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    width: '70%',
    marginBottom: 15,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderColor: '#FFD700',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    width: '70%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextOutline: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    width: '100%',
  },
});

export default Onboarding;