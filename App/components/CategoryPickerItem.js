import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';

import Icon from '../components/Icon'

function CategoryPickerItem({item, onPress}) {
        return <View style={styles.container}>
                    <Icon backgroundColor={item.backgroundColor} name={item.icon} size={60}></Icon>
                    <AppText style={styles.label}>{item.label}</AppText>
                </View>;
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
        width: "30%",

    },
    label: {
        marginTop: 10,
        textAlign: 'center'

    }
})

export default CategoryPickerItem;