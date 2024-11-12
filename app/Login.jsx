import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Nflix</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>New to Nflix? </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

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
    marginBottom: 40,
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
  input: {
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 20,
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
  link: {
    marginBottom: 10,
  },
  linkText: {
    color: '#E50914',
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
