import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import Colors from '../../utils/Colors';
import { TextProps } from './types';

const StyledText = styled.Text`
    font-size: 15px;
    fontFamily: Nunito_Sans;
    color: ${Colors.Black};
    textAlign: center;
  
`;

const RegularText: FunctionComponent<TextProps> = (props) => { 
return <StyledText style={props.style}>{props.children}</StyledText>
};


export default RegularText;
 