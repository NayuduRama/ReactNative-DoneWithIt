import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../components/config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View style= {styles.listingContainer}>
            <Image style= {styles.image} source={require("../assets/jacket.jpg")}/>
            <View style={styles.detailsContainer}>
                <AppText style= {styles.title}>Red Jacket for sale!</AppText>
                <AppText style= {styles.price}>$150</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                            title="Rama Nayudu" 
                            subtitle=" 2 Listings" 
                            image={require('../assets/rama.jpg')}
                            />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 10,
        margin: 10

    },
    image: {
        width: "100%",
        height: 200
    },
    listingContainer : {
        paddingTop: 100,
        margin: 10

    },
    title : {
        color: colors.balck,
        fontWeight: "600",
        fontSize: 25
    },
    price: {
        color: colors.secondary,
        fontWeight: "500",
        // marginVertical: 10
    },
    userContainer: {
        marginVertical: 20
    }
    
})
export default ListingDetailsScreen;