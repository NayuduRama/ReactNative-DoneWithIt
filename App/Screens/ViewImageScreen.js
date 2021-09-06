import React from 'react';
import { Image, View, StyleSheet, Text, _Text } from 'react-native';
 

function ViewImageScreen(props) {
    return ( 
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
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
        backgroundColor: "tomato",
        top: 50,
        left: 30,
        position: "absolute"
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "yellowgreen",
        top: 50,
        right: 50,
        position: "absolute"
    },
    container : {
        flex: 1,
        backgroundColor: 'black',
        // paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    primary : {
        flexBasis: ""
    }

})

export default ViewImageScreen;