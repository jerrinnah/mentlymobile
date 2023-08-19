import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BigText from '../SmallText/BigText'
import RegularText from '../SmallText/RegularText'

const CurMentor = () => {
  return (
    <View style={styles.textContainer}>
          <BigText style={styles.text}>Mentor: </BigText>
          <RegularText style={styles.mentor}>Smith James</RegularText>
    </View>
  )
}

export default CurMentor

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        // marginBottom:50,
      
    },
    textContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
        // marginBottom: 70,
        alignItems: 'center',
        paddingLeft:30
        
    },
    mentor: {
        fontSize:14
    }
})