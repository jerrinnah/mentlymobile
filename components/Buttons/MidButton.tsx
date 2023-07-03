import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import Colors from '../../utils/Colors';
import RegularText from '../SmallText/RegularText';

const MidButton = styled.TouchableOpacity`
background-color: ${Colors.Orange100};
width:143px;
height:52px;
padding:15px;
border-radius:5px;
justify-content: center;
align-items:center;



`;

import { ButtonProps } from './types';

const RegularButton: FunctionComponent<ButtonProps> = props => {
  return (
    <MidButton onPress={props.onPress} style={props.style}>
      <RegularText style={[{color: Colors.White}, props.textStyle]}>{props.children}</RegularText>
      </MidButton>
      
  );
};

export default MidButton;
