import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './config/colors';

function ListItemSeparator() {
    return (
        <View style={styles.separtor}></View>
    );
}

const styles = StyleSheet.create({
    separtor: {
        width:"100%",
         height:4, 
         backgroundColor:colors.light
    }
})
export default ListItemSeparator;