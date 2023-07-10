import React, { FunctionComponent } from 'react';
import { Button } from 'react-native';
import { Pressable } from 'react-native/types';
import styled from 'styled-components/native';
import Colors from '../../utils/Colors';
import RegularText from '../SmallText/RegularText';

const ButtonView = styled.TouchableOpacity`
  background-color: ${Colors.Orange100};
  width: 325px;
  height: 52px;
  padding: 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

import { ButtonProps } from './types';

const RegularButton: FunctionComponent<ButtonProps> = props => {
  return (
    <>
      <ButtonView onPress={props.onPress} style={props.style}>
        <RegularText style={[{ color: Colors.White }, props.textStyle]}>
          {props.children}
        </RegularText>
      </ButtonView>

      {/* <Button>Test</Button> */}
    </>
  );
};

export default RegularButton;
