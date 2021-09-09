import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import colors from './config/colors';

function AppText({children, style}) {
    return (
    <Text style={[styles.text, style]}>{children}</Text>
    );
}

Platform.select({
    ios: {
        fontSize: 20,
        fontFamily: "Avenir",
    },
    android: {
        fontSize: 20,
        fontFamily: "Roboto",
    }
})

const styles = StyleSheet.create({
    text:{
        color: colors.balck,
        // fontSize: 18,
        // fontFamily: Platform.OS === 'android' ? 'Roboto' : "Avenir",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 20,
                fontFamily: "Roboto",
        }
    })

    }
})
export default AppText;