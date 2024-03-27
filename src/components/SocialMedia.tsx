import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../assets/SocialMediaIcons/facebook.png')}
      />
      <Image
        style={styles.twitterIcon}
        source={require('../assets/SocialMediaIcons/twitter.png')}
      />
      <Image
        style={styles.imageStyle}
        source={require('../assets/SocialMediaIcons/google.png')}
      />
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  imageStyle: {
    height: 40,
    width:40,
    resizeMode:'stretch'
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    width:'100%',
    alignItems:'center'
  },
  twitterIcon:{height:60,width:60, marginTop:15}
});
