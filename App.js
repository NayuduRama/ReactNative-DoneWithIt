// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native'; 

import ViewImageScreen from './App/Screens/ViewImageScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen';

export default function App() {
  return (
     
      <WelcomeScreen/> 
      // <ViewImageScreen/>
      // <View style={styles.container}>
      //   <View style={styles.box}></View>
      // </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: "yellowgreen",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,

  }
});
