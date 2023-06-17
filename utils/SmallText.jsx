import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SmallText = (props) => {
  return (
    
      <Text style={[styles.default, props.style]}>{props.children}</Text>

  )
}

export default SmallText

const styles = StyleSheet.create({
    default: {
        fontFamily: 'Nunito_Sans',
        fontSize:12,
    }
})