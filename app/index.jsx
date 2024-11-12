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
        <Text style={styles.buttonText}>Start Watching</Text>
      </TouchableOpacity>

      <Link href="/profile" style={styles.linkText}>Go to Profile</Link>
      <Link href="/onboarding" style={styles.link}>Browse Library</Link>

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
    // Background gradient for more depth
    background: 'linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,1))',
  },
  logoContainer: {
    borderWidth: 3,
    borderColor: '#E50914',
    borderRadius: 15,
    padding: 15,
    marginBottom: 30,
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
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'Arial', // Better font for readability
    lineHeight: 28, // More spacing for easier reading
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 20,
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
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 10,
    textAlign: 'center',
  },
  link: {
    color: '#E50914',
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
