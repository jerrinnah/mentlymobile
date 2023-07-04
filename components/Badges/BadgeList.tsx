import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import RegularText from '../SmallText/RegularText'
import BigText from '../SmallText/BigText'
import { TouchableOpacity } from 'react-native'

const BadgeList = () => {
  return (
    <View style={styles.badgeContainer}>
          <View style={styles.badgeText}>
              <RegularText style={styles.subTitle}>Achievement</RegularText>
              <BigText style={styles.badgeTitle}>Best Student of the month</BigText>
              <View style={styles.statusContainer}>
                  <Image style={styles.verify} source={require('../../res/icons/verified.png')} />
                  <View style={styles.lowContent}>
                      <RegularText style={styles.archive}>Achieved</RegularText>
                      <RegularText  style={styles.date}>Oct 18, 2022</RegularText>
                  </View>
              </View>
       </View>
          <View style={styles.badeTag}>
              <Image style={styles.badge} source={require('../../res/icons/badgeAward.png')}/>
       </View>
    </View>
  )
}

export default BadgeList

const styles = StyleSheet.create({
    badgeContainer: {
        display:'flex',
        height: 134,
        width: 325,
        backgroundColor: Colors.Grey500,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.Grey400,
        overflow: 'hidden',
        flexDirection: 'row',
        marginTop:10,
    
        // justifyContent:'center'

    },
    badeTag: {
        height: '100%',
        width: 125,
        backgroundColor: Colors.Grey600,
        borderRadius: 10,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor:Colors.Grey400,
      
    },
    badge: {
        height: 64,
        width: 60,
    },
    badgeText: {
        height:70,
        width: 200,
        // backgroundColor: 'red',
        alignItems: 'flex-start',
        padding: 15,
        paddingTop:20,
    },
    badgeTitle: {
        fontSize: 14
        
    },
    subTitle: {
        fontSize: 12,
    },
    verify: {
        height: 20,
        width:20,
    },
    statusContainer: {
        // backgroundColor: 'green',
        height: '100%',
        width: 120,
        marginTop: 20,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        padding:10,
    },
    lowContent: {
        height: 30,
        width: 90,
        // backgroundColor: 'blue',
        marginLeft: 10,
        alignItems:'flex-start'
    },
    archive: {
        fontSize:10
    },
    date: {
        fontSize:10,
    }

})