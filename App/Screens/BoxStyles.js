import React from 'react';
import { View, StyleSheet } from 'react-native';

function BoxStyles(props) {
    return ( 

        <View style={styles.container}>
            
            <View style={styles.box}>
            <View style= {styles.innerBox}></View>
            <View style= {styles.innerBox2}></View>
            </View> 
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
                    flex: 1,
                    backgroundColor: '#fff',
                    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
    box : {
            backgroundColor: "dodgerblue",
            width: 100,
            height: 100,
            // alignItems: 'center',
            // justifyContent: 'center',
            borderWidth: 10,
            borderColor: "tomato",
            borderRadius: 10,
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
            padding: 10
        },
  innerBox: {
                width: 25,
                height: 25,
                backgroundColor: "tomato",
                // margin: 10
             },
  innerBox2: {
                width: 25,
                height: 25,
                backgroundColor: "tomato",
                margin: 10
            },
})

export default BoxStyles;