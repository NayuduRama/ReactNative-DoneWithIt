import React, { useState } from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import defaultStyles from './config/styles'; 
import AppText from './AppText';
import Screen from '../Screens/Screen';
import PickerItem from './PickerItem';
import Card from './Card';

function AppPicker({icon, items, selectedItem, placeholder, onSelectItem }) {
    const [modalVisible, setModalVisible ] = useState(false);
    return (
        <> 
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    { icon && 
                            <MaterialCommunityIcons
                                        name={icon}
                                        size={20}
                                        color={defaultStyles.colors.midum}
                                        style={styles.icon} />} 
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                                        name="chevron-down"
                                        size={20}
                                        color={defaultStyles.colors.midum} />
                </View>    
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="close" onPress={() => setModalVisible(false)}/> 
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value}
                        renderItem={({item}) =>   
                                <PickerItem 
                                    label={item.label}
                                    onPress={() =>  {setModalVisible(false); onSelectItem(item);}}
                            />
                        }
                        />
                </Screen>
            </Modal>
        </>
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
    text: {
        flex: 1
    },
    textInput: defaultStyles.text
    
})

export default AppPicker;