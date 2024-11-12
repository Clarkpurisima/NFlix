import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Nflix</Text>
      </View>
      <Text style={styles.subtitle}>Unlimited Movies & TV Shows, Anytime</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline}>
        <Text style={styles.buttonTextOutline}>Sign Up</Text>
      </TouchableOpacity>

      <Link href="/home" style={styles.linkText}>Browse Library</Link>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414', // Dark Netflix background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    borderWidth: 3,
    borderColor: '#E50914',
    borderRadius: 15,
    padding: 15,
    marginBottom: 50,
    // Adding shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  logo: {
    fontSize: 40,
    color: '#E50914',
    fontWeight: 'bold',
    letterSpacing: 1,
    textShadowColor: '#000', // subtle shadow on the logo text
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'Arial', // Better font for readability
    lineHeight: 28, // More spacing for easier reading
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 15,
    width: '80%',
    // Adding subtle shadow for a "clickable" effect
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#E50914',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 30,
    width: '80%',
    // Adding subtle shadow for a "clickable" effect
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonTextOutline: {
    color: '#E50914',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
});
