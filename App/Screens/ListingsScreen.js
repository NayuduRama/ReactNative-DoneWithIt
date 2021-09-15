import React from 'react';
import {FlatList, StyleSheet} from 'react-native'
import Card from '../components/Card';
import colors from '../components/config/colors';
import ListItem from '../components/ListItem';
import Screen from './Screen';

const listings = [
    {
        id: "1",
        title: "Red Jocket for sale",
        price: "100",
        image: require("../assets/jacket.jpg")
    },
    {
        id: "2",
        title: "Couch in good condition",
        price: "1500",
        image: require("../assets/couch.jpg")
    }
]

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
             <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id}
                    renderItem={({item}) => 
                    <Card
                        title={item.title}
                        subtitle={"$" + item.price}
                        image={item.image}
                    />
                }
             />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
    
})
export default ListingsScreen;