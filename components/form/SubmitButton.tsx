import React from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { Pressable } from 'react-native';
import { Text } from 'react-native'
import Colors from '../../utils/Colors';

interface IProps {
    onSubmit: (data: any) => void;
    label: string;
  isLoading?: boolean;
  handleSubmit?: any;
  
}



export const SubmitButton = ({ onSubmit, label, isLoading }: IProps ) => {
    const { handleSubmit, formState: { isDirty, isValid,  } } = useFormContext();

  return (
    <>
       <Pressable onPress={handleSubmit(onSubmit)} disabled={!isDirty || !isValid  ? true:  false} style={{ width: '100%', height: 50, backgroundColor: !isDirty || !isValid ? Colors.Grey400: Colors.NavyBlue100, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 17, color: !isDirty || !isValid ? Colors.White: 'white' }}>{isLoading ? 'submitting...':label}</Text>
      </Pressable>
    </>

  )
}