// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ViewImageScreen from './App/Screens/ViewImageScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import AppText from './App/components/AppText';

export default function App() {
  return (
     
      // <WelcomeScreen/> 
      // <ViewImageScreen/>
      <View style={styles.container}>
        {/* <MaterialIcons name="mark-email-unread" size={24} color="dodgerblue" /> */}
        
        <AppText style={styles.text}> I <AntDesign name="heart" size={18} color="dodgerblue" />  React-Native. This is my first React Native Application</AppText>
        {/* <View style={styles.box}>
          <View style= {styles.innerBox}></View>
          <View style= {styles.innerBox2}></View>
        </View> */}
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
  imagesytle: {
    // flex: 1,
    width: 200,
    height: 200
  },
  box : {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 10,
    borderColor: "yellowgreen",
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
  text:{
    fontSize: 27,
    fontStyle: "italic",
    fontWeight: "600",
    color: "yellowgreen",
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 35,
  }
});
