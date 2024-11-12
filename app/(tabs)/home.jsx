import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const Home = () => {
    return (
        <ImageBackground 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGt94ludgtqDWp0bB3xQjHv3Z84RySNir2A&s' }} 
            style={styles.background}
        >
            <View style={styles.overlay}>
                <View style={styles.topBar}>
                    <Text style={styles.logo}>FREEPLAY</Text>
                    <View style={styles.rightTopBar}>
                        <Text style={styles.languageOption}>English</Text>
                        <TouchableOpacity>
                            <Text style={styles.signIn}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.centerContent}>
                    <Text style={styles.title}>Unlimited movies, TV shows, and more.</Text>
                    <Text style={styles.subtitle}>Watch anywhere. No ads, no payments. Free 4K downloads!</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Search Movies"
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Start Watching for Free</Text>
                    </TouchableOpacity>

                    <Text style={styles.freeText}>Free. No ads. Free 4K downloads available.</Text>
                </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent overlay
        paddingHorizontal: 20,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 10,
    },
    logo: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    rightTopBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    languageOption: {
        color: '#fff',
        marginRight: 20,
    },
    signIn: {
        color: '#fff',
        fontWeight: 'bold',
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 15,
        borderRadius: 5,
        fontSize: 16,
        width: '80%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#e50914',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    freeText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 20,
        textAlign: 'center',
        fontStyle: 'italic',
    },
});

export default Home;
