import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install react-native-vector-icons

const bookmarksData = [
    {
        id: '1',
        title: 'Inception',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'
    },
    {
        id: '2',
        title: 'The Matrix',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    },
    {
        id: '3',
        title: 'Interstellar',
        poster: 'https://fc04.deviantart.net/fs71/f/2014/045/a/2/interstellar_by_visuasys-d6ibj30.jpg',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.'
    },
    {
        id: '4',
        title: 'Avatar',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqzBDPO2ft-LQ6zmRL5E877-EEodoJkIs0A&s',
        description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
    },
    // Add more bookmarks as needed
];

const Bookmark = () => {
    const renderBookmarkItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
            <Image source={{ uri: item.poster }} style={styles.poster} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.iconContainer}>
                <Icon name="favorite" style={styles.icon} />
                <Text style={styles.iconText}>Remove Bookmark</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bookmarked Movies</Text>
            <FlatList
                data={bookmarksData}
                renderItem={renderBookmarkItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false} // Hides the scroll indicator
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212', // Darker background for a sleek look
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF', // White text for better contrast
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: '#1c1c1c', // Dark background for card-like appearance
        borderRadius: 12,
        padding: 15,
        elevation: 8, // Elevation for a subtle shadow effect
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        position: 'relative', // Position relative for icon positioning
    },
    poster: {
        width: '100%',
        height: 250, // Increased height for a more immersive poster look
        borderRadius: 12,
        marginBottom: 10,
    },
    title: {
        fontSize: 24, // Larger font size for titles
        fontWeight: 'bold',
        color: '#FFFFFF', // White title text to match the Netflix style
        marginVertical: 5,
    },
    description: {
        fontSize: 16, // Slightly larger description text
        color: '#B0B0B0', // Light gray description for a subtle look
        lineHeight: 24, // More readable line height
        marginBottom: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        color: '#E50914', // Netflix red for the favorite icon
        marginRight: 5,
        fontSize: 24,
    },
    iconText: {
        color: '#E50914', // Netflix red text for remove bookmark
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Bookmark;
