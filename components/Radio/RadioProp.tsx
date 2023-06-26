
import React, { useMemo, useState } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { View } from "react-native";
import Colors from '../../utils/Colors';
import BigText from '../SmallText/BigText';
import RegularText from '../SmallText/RegularText';

function RadioButton({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('SignIn');
      };
    
    const [selectedId, setSelectedId] = useState<string | undefined>();

    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: <RegularText >A Mentee</RegularText>,
            value: 'Mentee',
            // onPress: (() => {pressHandler})
        },
        {
            id: '2', // acts as primary key, should be unique and non-empty string
            label: <RegularText>A Mentor</RegularText>,
            value: 'Mentor'
        },
        // {
        //     id: '3',
        //     label: <RegularText>An Organisation</RegularText>,
        //     value: 'Organisation'
        // }
    ]), []);

  
    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    );

}
  
export default RadioButton