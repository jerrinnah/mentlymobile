import { StyleSheet, Text, View } from 'react-native'
import React, { Children, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';


interface ModalProps {
    title: string;
    isOpen: boolean;
    children: string;
    onClose: ()=>(void);
}


const ModalComponent: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    
    
    return (
        <>
            {isOpen
                
            ?   <View style={{flex:1, backgroundColor: 'grey', justifyContent:"center", alignItems:'center', borderRadius:20, }}>
                    <TouchableOpacity>
                        <Text>Logout</Text>
                    </TouchableOpacity> 
                    
                    <Text>{title}</Text>
                    <View>{children}</View>
                </View> :
                null
            } 
           
         </> )
}  

export default ModalComponent

const styles = StyleSheet.create({})