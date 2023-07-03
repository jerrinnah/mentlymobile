import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import RegularText from '../SmallText/RegularText'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItem = ({settingName, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.listRow} onPress={onPress}>
          <View style={styles.userRow}> 
              <Image style={styles.userIcon} source={icon}/>
              <RegularText style={styles.settingStyle}>{settingName}</RegularText>
          </View>
          <Image style={styles.arrowIcon} source={require('../../res/icons/rightArrowBlack.png')}/>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listRow: {
        height: 50,
        width:350,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        padding: 10,
        alignItems:'center'

    },
    userRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '70%',
        // backgroundColor: 'green',
        
    },
    userIcon: {
        height: 19,
        width:17,
    },
    arrowIcon: {
        height: 15,
        width:8
    },
    settingStyle: {
        paddingLeft:30,
    }
})