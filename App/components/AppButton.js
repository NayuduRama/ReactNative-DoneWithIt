import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from './config/colors';

function AppButton({title, color= "primary", onPress}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
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
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 18,
        textTransform: "uppercase",
    }
    
})



export default AppButton;