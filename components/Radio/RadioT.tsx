import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../utils/Colors';

export const AccountTypePicker = ({
    label,
    isChecked,
    onCheck,
    index,
}: {
        label: string,
        isChecked: boolean,
        onCheck: (index: number) => void,
        index: number
}) => {
    return (
        <View style={{ width: '100%', height: 60, flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', paddingLeft:100, top:20 }}>
            {/* RADIO BUTTON */}
            <Pressable onPress={() => onCheck(index)} style={{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 1, borderColor: Colors.NavyBlue100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{  width: 30, height: 30, borderRadius: 15, backgroundColor: isChecked ? Colors.NavyBlue100:Colors.White }} />
            </Pressable>

            <Text style={{ marginLeft: 10 }}>{label}</Text>
        </View>
    )
}

const RadioT = () => {
    const [activeIndex, setActiveIndex] = React.useState(-1);

  return (
    <View style={styles.round}>
      <View>
        <View style={styles.row}>
          <View style={styles.circleBorder}>
            {/* <TouchableOpacity
              style={styles.circle}
              onPress={() => setColor(1)}
            ></TouchableOpacity> */}
          </View> 
          <Text>RadioT</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.circleBorder}>
            {/* <TouchableOpacity
              style={styles.circle}
              onPress={() => setColor(2)}
            ></TouchableOpacity> */}
          </View> 
          {/* <Text>Rad t</Text> */}
        </View>
       
      </View>
    </View>
  );
};

export default RadioT;

const styles = StyleSheet.create({
    row:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:80,
        // backgroundColor:'red'
    },
  round: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    // justifyContent: 'center',
  },
  circleBorder: {
    height: 26,
    width: 26,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

    //   position: 'absolute',
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: 'green',
    position: 'absolute',
  },
});
