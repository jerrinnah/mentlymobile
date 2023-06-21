import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import Colors from '../../utils/Colors';
import { TextProps } from './types';

const StyledText = styled.Text`
    font-size: 13px;
    color: ${Colors.Black};
  
`;

const SmallerText: FunctionComponent<TextProps> = (props) => { 
    return <StyledText style={props.style}>{props.children}</StyledText>
};


export default SmallerText;
 