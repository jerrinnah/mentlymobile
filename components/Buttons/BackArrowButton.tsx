import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

const BackArrowButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}> 
          <Image
            style={styles.leftBtn}
            source={require('../../res/icons/leftIconOrng.png')}
          />
        </TouchableOpacity>
  )
}

export default BackArrowButton

const styles = StyleSheet.create({
    leftBtn: {
        height: 15,
        width: 15,
    },
    
    box: {
        height: 40,
        width: 40,
        backgroundColor: Colors.Grey500,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 10,
      },
})