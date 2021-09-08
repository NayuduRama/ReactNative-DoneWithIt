import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Buttons(props) {
    return (
                <View style={styles.box}>
                     
                </View>
        // <View style={styles.container}>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
                    flex: 1,
                    backgroundColor: '#fff',
                    // paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
                    alignItems: 'center',
                    justifyContent: 'center',
            },
    box : {
        width: "100%",
        height: 50,
        backgroundColor: "tomato",
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderRadius: 20
    },
     login: {
         fontSize: 30, 
         color: "white"

     }
    
})

export default Buttons;