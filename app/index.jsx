import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Used to navigate between pages

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME TO NFLIX</Text>
        <Text style={styles.subtitle}>Unlimited movies, TV shows, and more</Text>
        
        <Link href="/onboarding" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Click to Join</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414', // Dark background similar to Netflix
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent overlay
    padding: 30,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E50914', // Netflix Red
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IndexPage;