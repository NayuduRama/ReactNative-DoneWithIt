import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function BoxStyles(props) {
    return ( 

        <View style={styles.container}>
            
            <View style={styles.box}>
            <View style= {styles.innerBox}>
                <Text  style={styles.hello}>Hello</Text>
                <Text style={styles.world}>world!</Text>
                <Text >HRU!</Text>
            </View>
            {/* <View style= {styles.innerBox}></View> */}
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
            width: 400,
            height: 500,
            // alignItems: 'center',
            // justifyContent: 'center',
            borderWidth: 10,
            borderColor: "tomato",
            borderRadius: 10,
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 10
        },
    hello: {
        color: "green",
        // paddingVertical: 50
    },
  innerBox: {
                width: 250,
                height: 250,
                backgroundColor: "tomato",
                paddingVertical: 50, 
                // margin: 10
             },
  innerBox2: {
                width: 25,
                height: 25,
                backgroundColor: "tomato",
                margin: 10
            },
    world: {
        color: "blue",
        // paddingVertical: 10
    },
})

export default BoxStyles;