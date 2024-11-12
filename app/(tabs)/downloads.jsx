import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install react-native-vector-icons

const downloadsData = [
    {
        id: '1',
        title: 'Inception',
        poster: 'https://ntvb.tmsimg.com/assets/p7825626_v_h10_aa.jpg?w=1280&h=720',
        status: 'Downloaded',
        progress: 100, // Download progress
    },
    {
        id: '2',
        title: 'The Matrix',
        poster: 'https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1640104487170-CQ194H8DQ1ZP3XADDO36/Film-Review-The-Matrix-Resurrections.jpg',
        status: 'Downloaded',
        progress: 100, // Download progress
    },
    {
        id: '3',
        title: 'Interstellar',
        poster: 'https://fc04.deviantart.net/fs71/f/2014/045/a/2/interstellar_by_visuasys-d6ibj30.jpg',
        status: 'Downloaded',
        progress: 100,
    },
    {
        id: '4',
        title: 'Avatar',
        poster: 'data:image/jpeg;base64,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',
        status: 'Downloaded',
        progress: 100,
    },
    // Add more downloaded movies as needed
];

const Downloads = () => {
    const handleDelete = (id) => {
        // Logic to handle the deletion of the download
        console.log(`Delete movie with id: ${id}`);
    };

    const renderDownloadItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.poster }} style={styles.poster} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.downloadStatusContainer}>
                    <Icon name="file-download" style={styles.downloadIcon} />
                    <Text style={styles.status}>{item.status}</Text>
                </View>
                <View style={styles.progressContainer}>
                    <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
                </View>
            </View>
            <TouchableOpacity 
                onPress={() => handleDelete(item.id)} 
                style={styles.deleteButton}
                activeOpacity={0.7} // Slightly reduce opacity on press
            >
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Downloaded Movies</Text>
            <FlatList
                data={downloadsData}
                renderItem={renderDownloadItem}
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
        backgroundColor: '#000', // Black background for a Netflix-like feel
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff', // White text for better contrast
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20, // Increased space between items
        backgroundColor: '#1c1c1c', // Dark card background
        borderRadius: 10,
        padding: 10,
        elevation: 5, // Shadow effect
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    poster: {
        width: 80,
        height: 120,
        borderRadius: 8,
        borderWidth: 1, // Adding a border
        borderColor: '#e74c3c', // Red border for visual pop
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff', // White title text
    },
    status: {
        fontSize: 14,
        color: '#b3b3b3', // Light gray for status text
    },
    deleteButton: {
        backgroundColor: '#e74c3c', // Bright red delete button
        borderRadius: 5,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10, // Space between status and button
        borderWidth: 1,
        borderColor: '#fff', // White border around button
        transition: 'background-color 0.3s', // Smooth background color change
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    downloadIcon: {
        width: 20,
        height: 20,
        tintColor: '#e74c3c', // Icon color to match the theme
        marginRight: 10, // Space between icon and text
    },
    downloadStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressContainer: {
        height: 6,
        width: '100%',
        backgroundColor: '#444', // Background for progress bar
        borderRadius: 3,
        marginTop: 5,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#e74c3c', // Red progress bar
        borderRadius: 3,
    },
});

export default Downloads;
