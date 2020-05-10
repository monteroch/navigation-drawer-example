import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const About = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.content}>About</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff4040',
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