import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from './AppText';

import colors from './config/colors';

function Card({title, subtitle, image}) {
    return (
        <View style={styles.card}> 
            <Image style={styles.image} source={image}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style= {styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        marginBottom: 10,
        borderRadius: 15,
       overflow: "hidden" 
    },
    detailsContainer: { 
        padding: 10

    },
    image: {
        width:"100%",
        height: 200,
        // borderTopLeftRadius: 30, 
        // borderBottomRightRadius: 30
    },
    title: {
        color: colors.balck,
        // margin: 10,
    },
    subtitle: {
        color: colors.secondary,
        // margin: 10,

    }


    
})

export default Card;