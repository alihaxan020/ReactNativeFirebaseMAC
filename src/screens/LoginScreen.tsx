import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import SocialMedia from '../components/SocialMedia';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.imageBackground}>
        <Image
          source={require('../assets/food/food.png')}
          style={styles.foodImage}
        />
        <Text style={styles.title}>Fatmore</Text>
        <View style={styles.inputsContainer}>
          <MyTextInput placeholder="Enter Email or User Name" autoCapitalize="none"/>
          <MyTextInput placeholder="Password" secureTextEntry={true} />
          <Text style={styles.donotHaveAccount}>Don't Have An Account Yet?</Text>
          <MyButton title="Login" />
          <Text style={styles.orText}>OR</Text>
        <SocialMedia/>
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
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  foodImage: {
    height: 50,
    width: 90,
    position: 'absolute',
    resizeMode: 'stretch',
    right: 20,
    top: Platform.OS == 'android' ? 20 : 50,
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginTop: Platform.OS == 'android' ? 60 : 110,
    fontFamily: 'Audiowide-Regular',
  },
  inputsContainer: {
    height: 450,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 20,    
  },
  donotHaveAccount: {
    alignSelf:'flex-end',
    marginRight:10,
    marginBottom:15,
    color:'black',
    fontFamily:'Langar-Regular'
  },
  orText:{
    fontSize:20,
    color:'gray',
    marginTop:20,
    fontFamily:'Audiowide-Regular'
  }
});
