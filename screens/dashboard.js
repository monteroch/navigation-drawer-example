import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Dashboard = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.content}>Dashboard</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ace1af',
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