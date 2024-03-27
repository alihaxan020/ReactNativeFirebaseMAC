import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface MyButtonProps {
    title : string,
    onPress ?: ()=>any

}

const MyButton = ({title, onPress}:MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}  onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    container : {
        height:50,
        width:"100%",
        justifyContent:'center',
        alignItems:"center",
        borderRadius:30,
        backgroundColor:'#ff0036'
    },
    title:{
        color:'white',
        fontSize:20,
        fontFamily:'Redressed-Regular'
    }
})