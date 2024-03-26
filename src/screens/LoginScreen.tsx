import {Image, ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.imageBackground}>
            <Image source={require("../assets/food/food.png")}
            style={
                styles.foodImage
            }
            />
            <Text style={styles.title}>Fatmore</Text>
            <View style={styles.inputsContainer}>

            </View>
        </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
imageBackground: {
    height: '100%',
    paddingHorizontal:20,
    alignItems:'center'
  },
  foodImage: {
    height:50,
    width:90,
    position:"absolute",
    resizeMode:"stretch",
    right:20,
    top:Platform.OS == "android"?20:50
},
title:{
    color:'white',
    fontSize:40,
    marginTop: Platform.OS == "android" ? 60:110,
    fontFamily: 'Audiowide-Regular'
},
inputsContainer:{
  height:450,
  width:'100%',
  backgroundColor:'white',
  borderRadius:20,
  alignItems:'center',
  marginTop:30
}
});
