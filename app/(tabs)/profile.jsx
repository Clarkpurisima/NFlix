import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; 
import React from 'react';

const Profile = () => {
    const userData = {
        name: 'Clark Nino',
        profilePicture: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1K4vS0I9itLmBcfH3UPsk0Gtz0EMwJnS1_gARBHravwNut18O',
        email: 'Clarkpurisima@gmail.com',
        bio: 'Movie enthusiast and avid traveler.',
        favoriteGenres: ['Action', 'Drama', 'Sci-Fi'],
    };
    return (
        <View style={styles.container}>
            <View style={styles.profileCard}>
                <Image source={{ uri: userData.profilePicture }} style={styles.profilePicture} />
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.email}>{userData.email}</Text>
                <Text style={styles.bio}>{userData.bio}</Text>

                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>120</Text>
                        <Text style={styles.statLabel}>Movies Watched</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>45</Text>
                        <Text style={styles.statLabel}>Favorites</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>5</Text>
                        <Text style={styles.statLabel}>Downloads</Text>
                    </View>
                </View>

                <Text style={styles.genresHeader}>Favorite Genres:</Text>
                <View style={styles.genresContainer}>
                    {userData.favoriteGenres.map((genre, index) => (
                        <Text key={index} style={styles.genre}>{genre}</Text>
                    ))}
                </View>

                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141414', // Dark background for Netflix-like feel
        padding: 20,
    },
    profileCard: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#222', // Dark card background
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2.22,
        elevation: 4, // For Android shadow
        alignItems: 'center',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3, // Adding a border
        borderColor: '#e50914', // Netflix red border
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', // White text for better contrast
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#ddd', // Light gray for email text
        marginBottom: 5,
    },
    bio: {
        fontSize: 14,
        color: '#aaa', // Slightly darker gray for bio text
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    stat: {
        alignItems: 'center',
        flex: 1,
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e50914', // Netflix red for numbers
    },
    statLabel: {
        fontSize: 14,
        color: '#ddd', // Light gray for labels
    },
    genresHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },
    genre: {
        backgroundColor: '#e50914', // Netflix red for genre tags
        color: '#fff',
        padding: 5,
        borderRadius: 5,
        margin: 3,
    },
    editButton: {
        backgroundColor: '#e50914',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
    editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Profile;
