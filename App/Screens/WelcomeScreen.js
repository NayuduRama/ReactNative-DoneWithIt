import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
             <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text> Sell what you don't need!</Text>
             </View>
            {/* <View style={styles.loginButton}/> */}
            <AppButton title="Login"/>
            <AppButton title="Register"/>
            {/* <View style={styles.registerButton}/> */}

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer : {
        top: 70,
        position: "absolute",
        alignItems: "center"
    },
    loginButton : {
        width: "100%",
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton : {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4'
    }
})

export default WelcomeScreen;