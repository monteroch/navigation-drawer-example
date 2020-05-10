import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Settings = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.content}>Settings</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffa6c9',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '100%'
    },
    content: {
        fontSize: 40
    }
});