import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import colors from '../components/config/colors';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from './Screen';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,


        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
            

        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}> 
            <View style={styles.container}>
                <ListItem title="Rama" 
                        subtitle="rama@vaanmarai.com"
                        image={require("../assets/rama.jpg")}  
                        
                        />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuitem => menuitem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={ ({item}) => 
                                <ListItem 
                                    title={item.title}
                                    IconComponent={
                                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                                    }
                                />

                    }
                    />
            </View>
            <ListItem 
                      title="Log Out"
                      IconComponent={<Icon
                                name="logout"
                                backgroundColor="#ffe66d"
                        />}  
                    />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
    
})

export default AccountScreen;