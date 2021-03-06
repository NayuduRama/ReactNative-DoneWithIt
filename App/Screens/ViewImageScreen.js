import React from 'react';
import { Image, View, StyleSheet, Text, _Text } from 'react-native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

function ViewImageScreen(props) {
    return ( 
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.closeIcon} name="close" size={50} color="white" />
            <MaterialCommunityIcons style={styles.deleteIcon} name="trash-can-outline" size={50} color="white" />
            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')}/> 
        </View> 
    );
}
const styles = StyleSheet.create({
    image : {
        width: "100%",
        height: "100%"
    },
    closeIcon: {
        width: 50,
        height: 50, 
        top: 50,
        left: 30,
        position: "absolute"
    },
    deleteIcon: {
        width: 50,
        height: 50, 
        top: 50,
        right: 50,
        position: "absolute"
    },
    container : {
        flex: 1,
        backgroundColor: 'black', 
    },
    primary : {
        flexBasis: ""
    }

})

export default ViewImageScreen;