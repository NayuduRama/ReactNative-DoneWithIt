import React, { useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, StatusBar, Platform, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDelete from '../components/ListItemDelete';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from './Screen';

const initialMessages = [
    {
        id: '1',
        title: 'T1',
        description: "D1",
        image: require('../assets/rama.jpg'),
    },
    {
        id: '2',
        title: 'T2',
        description: "D2",
        image: require('../assets/rama.jpg'),
    }
]

function MessageScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const hendleDelete = (message) => {
        setMessages(messages.filter(m => m.id !== message.id))

    }
    return ( 
        <Screen>
            
            <FlatList
                data={messages}
                keyExtractor={messages => messages.id}
                renderItem={({item}) => <ListItem
                                            title={item.title}
                                            subtitle={item.description}
                                            image={item.image}
                                            onPress={() => console.log(item)} 
                                            renderRightActions={() => <ListItemDelete onPress={() => hendleDelete(item)}/>}
                                            />}
                ItemSeparatorComponent= {ListItemSeparator}
            />
        </Screen>
         
    );
}

const styles = StyleSheet.create({
    container: {
                flex: 1,
                alignContent:"center",
                paddingTop: StatusBar.currentHeight || 0,
            },
    
})
export default MessageScreen;