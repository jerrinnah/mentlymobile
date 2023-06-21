import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import Colors from '../../../utils/Colors';
import { ContainerProps } from './types';

const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top;
  background-color: ${Colors.Grey200}
`;

const MainContainer: FunctionComponent<ContainerProps> = (props) => { 
    return <StyledView style={props.style}>{props.children}</StyledView>
};


export default MainContainer;
 