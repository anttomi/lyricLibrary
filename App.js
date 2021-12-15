import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions} from 'react-native';
import Search from './components/Search';
import Login from './components/Login';




export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} resizeMode="cover" blurRadius={15} source={require("./assets/background2.jpg")}>
      <Text style={styles.headerContainer}>Lyrics Finder</Text>
      
      <Search/>
      <StatusBar style="auto" />
      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: "center",
    height: Dimensions.get('window').height ,
    width : Dimensions.get('window').width,
    zIndex: -1,
    position: "absolute"
  },
  headerContainer: {
    marginTop: 60,
    padding : 5,
    alignItems: "center", 
    alignContent: "center",
    fontSize: 44, 
    color: "#000",
    textShadowColor : "#000", 
    textShadowRadius : 15,
    textShadowOffset: {width: 2, height: 2}
  }
});

/**
 * 
 */