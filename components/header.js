import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 

export const Header = ({navigation, title}) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
                <SimpleLineIcons style={styles.headerIcon} name="menu" size={24} color="white" onPress={openMenu}/>
                <View style={styles.headerTitleWrapper}>
                    <Text style={styles.title}> { title } </Text>
                </View>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    headerContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    headerContent:{
        flexDirection: 'row',
        // backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 20
    },
    headerIcon: {
        // backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'rgb(255, 255, 255)',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10
    },
    headerTitleWrapper: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        // backgroundColor: 'pink',
        minWidth: 50,
        alignSelf: 'center',
        fontSize: 24,
        color: 'rgb(255, 255, 255)'
    }
});