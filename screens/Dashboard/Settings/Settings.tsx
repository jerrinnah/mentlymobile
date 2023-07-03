import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import BigText from '../../../components/SmallText/BigText'
import RegularText from '../../../components/SmallText/RegularText'
import Colors from '../../../utils/Colors'
import ListItem from '../../../components/Settings/ListItem'


const user = require('../../../res/icons/userIconSetting.png')
const badge = require('../../../res/icons/badge.png')
const lock = require('../../../res/icons/lock.png')
const icon = require('../../../res/icons/Logout.png')

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BigText>Settings</BigText>
        <View style={styles.settingHeader}>
          <Image style={styles.avi} source={require('../../../res/images/userAvi.png')} />
          <BigText style={styles.userName}>John Doe</BigText>
          <RegularText style={styles.userEmail}>johndoe768@gmail.com</RegularText>
        </View>
        <View style={styles.line}></View>

        <View>
          <ListItem icon={user} settingName="My Profile"/>
          <ListItem settingName="Badges" icon={badge} />
          <ListItem settingName="Change Password" icon={lock} />

          <View>
          <View style={styles.userRow}> 
              <Image style={styles.userIcon} source={icon}/>
              <RegularText style={styles.settingStyle}>Log Out</RegularText>
          </View>
        
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:70,
  },
  settingHeader: {
    height:130,
    marginTop:50,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  avi: {
    height: 70,
    width:70,
  },
  userName: {
    fontSize:20,
  },
  userEmail: {
    fontSize:14
  },
  line: {
    top:10,
    height: 1,
    width: '80%',
    backgroundColor: Colors.Grey400,
    marginBottom:50,
  },
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
 marginTop:70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '70%',
  // backgroundColor: 'green',
  paddingLeft: 20,
    
    
},
userIcon: {
    height: 19,
    width:19,
},
arrowIcon: {
    height: 15,
    width:8
},
settingStyle: {
    paddingLeft:30,
}
})