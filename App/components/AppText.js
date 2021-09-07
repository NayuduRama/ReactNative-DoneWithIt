import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
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
        color: "tomato",
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