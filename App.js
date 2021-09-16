
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ViewImageScreen from './App/Screens/ViewImageScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import AppText from './App/components/AppText';
import BoxStyles from './App/Screens/BoxStyles'; 
import AppButton from './App/components/AppButton';
import Card from './App/components/Card';
import ListingDetailsScreen from './App/Screens/ListingDetailsScreen';
import MessageScreen from './App/Screens/MessageScreen';
import AccountScreen from './App/Screens/AccountScreen';
import ListingsScreen from './App/Screens/ListingsScreen'; 
import Screen from './App/Screens/Screen';
import AppInputText from './App/components/AppInputText';
import SwitchComponent from './App/components/SwitchComponent';
import AppPicker from './App/components/AppPicker';
import PickerItem from './App/components/PickerItem';
// console.log(Constants);

const categories = [
  { label: "Furniture", value: "1"},
  { label: "Clothing", value: "2" },
  { label: "Electric", value: "3" }
]
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (  
      // <WelcomeScreen/> 
        // <MessageScreen/> 
        // <AccountScreen/> 
        <Screen>
            {/* <AppInputText placeholder="Email" icon="email"/> */}
             {/* <SwitchComponent/> */}
             <AppPicker selectedItem={category} onSelectItem={item => setCategory} icon="apps" items={categories} placeholder="Category"/>
             <AppInputText placeholder="Email" icon="email"/> 
        </Screen>
        // <ListingsScreen/>

      // <ListingDetailsScreen/>
      // <View style={styles.cardContainer}>
      //   <Card 
      //       title = "Red Jocket for sale"
      //       subtitle = "$100"
      //       image = {require('./App/assets/jacket.jpg')}
      //       ></Card>
      //       {/* <Image source={require('./App/assets/jacket.jpg')}></Image> */}

      // </View>
      // <ViewImageScreen/>
          // <AppText style={styles.text}> I <AntDesign name="heart" size={18} color="dodgerblue" />  React-Native. This is my first React Native Application</AppText> 
      // <View style={styles.container}>
      //     <AppButton title="Login" onPress={() => console.log("Tapped")}/> 
      // </View>
    // <BoxStyles/>
    // <Buttons/> 
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f8f4f4",
    padding: 10,
    paddingTop: 50,
  },
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
