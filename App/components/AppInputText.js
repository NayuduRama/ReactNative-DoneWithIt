import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import defaultStyles from './config/styles'; 

function AppInputText({icon, ...otherProps}) {
    return ( 
            <View style={styles.container}>
                { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.midum} style={styles.icon} />} 
                <TextInput  
                            placeholderTextColor={defaultStyles.colors.midum}
                            style={styles.textInput} {...otherProps}/>
            </View>    
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon : {
        marginRight: 10

    },
    textInput: defaultStyles.text
    
})

export default AppInputText;