import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import Colors from '../../utils/Colors';
import RegularText from '../SmallText/RegularText';

const ButtonView = styled.TouchableOpacity`
  background-color: ${Colors.Orange100};
  width: 70px;
  height: 36px;
  padding: 5px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

import { ButtonProps } from './types';

const ShortButton: FunctionComponent<ButtonProps> = props => {
  return (
    <ButtonView onPress={props.onPress} style={props.style}>
      <RegularText style={[{ color: Colors.White}, props.textStyle]}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default ShortButton;
