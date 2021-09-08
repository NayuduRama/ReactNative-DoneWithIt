import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from './config/colors';

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        width: "100%",
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 18,
        textTransform: "uppercase",
    }
    
})



export default AppButton;