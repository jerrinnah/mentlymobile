import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  Pressable,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import BackArrowButton from '../Buttons/BackArrowButton';
import BigText from '../SmallText/BigText';
import { Controller, useForm } from 'react-hook-form';
import RegularText from '../SmallText/RegularText';
import Colors from '../../utils/Colors';
import RegularButton from '../Buttons/RegularButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MidButton from '../Buttons/MidButton';
import ModalComponent from '../Modal/ModalCom';

const UpdatePassword = ({ navigation }) => {


  
  const [isModalVisible, setModalVisible] = useState(false);
 
  const returnHandler = () => {
    navigation.goBack();
  };

 
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onClose = () => {
    setModalVisible(!isModalVisible);
  }

  const isClose = () => {
    setModalVisible(!isModalVisible);
  }


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmpassword: '',
    },
  });

  return (
    <View style={styles.container}>
   
      {
        isModalVisible ? 
          
        <Modal  transparent={true} animationType={'fade'} style={styles.modlSize}>
        <View style={styles.modalBgx}>
          <View style={styles.modalContainer1x}>
            <BigText>Logout</BigText>

            <View style={styles.greyLinex}></View>

            <RegularText style={styles.questionx}>
              Are you sure, you want to log out?
          </RegularText>
         

            <View style={styles.buttonsx}>
              <MidButton style={styles.cancelBtn} onPress={()=> setModalVisible(!isModalVisible)} >
               <Text>Cancel</Text>
              </MidButton>
              <MidButton style={styles.logoutBtn} onPress={()=>console.log('Pressed')}>
                <RegularText style={{color: 'white'}}>Update</RegularText>
              </MidButton>
   
            </View>
          </View>
        </View>
      </Modal> : null
         }
      
      
    

      <View style={styles.titleRow}>
        <BackArrowButton onPress={returnHandler} />
        <BigText style={styles.pageTitle}>Update Password</BigText>
      </View>

      

      <View style={styles.settingHeader}>
        <Image
          style={styles.avi}
          source={require('../../res/images/userAvi.png')}
        />
        <TouchableOpacity onPress={toggleModal}>
          <Image
            style={styles.aviIcon}
            source={require('../../res/icons/aviEdit.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <RegularText style={styles.label}>Current password</RegularText>
              <TextInput
                // placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            </View>
          )}
          name="firstName"
        />
        {/* {errors.firstName && <Text>This is required.</Text>} */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <RegularText style={styles.label}>New password</RegularText>
              <TextInput
                // placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            </View>
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <RegularText style={styles.label}>Confirm password</RegularText>
              <TextInput
                // placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            </View>
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        {/* <Button onPress={()=> setModalVisible(false)} title='Test'> Test</Button> */}
      </View>

      {/* {
        !showbottom ? ModalPort : <Text>Nothing</Text>
      } */}

      <RegularButton onPress={()=>setModalVisible(!isModalVisible)} style={styles.saveButton}> Save Changes</RegularButton>

     
    </View>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  modalSmall: {
    // height: 300,
    // width: 600,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent:'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    alignSelf: 'center',
  },
  modlSize: {
    marginBottom:30,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    // backgroundColor:'red'
  },
  pageTitle: {
    fontSize: 25,
    left: 20,
  },
  settingHeader: {
    top: 50,
    flexDirection: 'row',
  },
  avi: {
    height: 70,
    width: 70,
  },
  aviIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 50,
    left: -10,
    // right: 30,
  },
  textInput: {
    paddingLeft: 10,
    height: 50,
    width: 320,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.Grey300,
  },

  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  button: {
    top: 30,
  },
  bgColor: {
    backgroundColor: Colors.NavyBlue100,
  },
  form: {
    marginTop: 90,
  },
  label: {
    color: Colors.Grey200,
  },
  saveButton: {
    top: 140,
    backgroundColor: Colors.NavyBlue100,
  },
  modal: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    top: 640,
    height: 260,
    width: '100%',
    backgroundColor: Colors.Grey500,
    alignItems: 'center',
    padding: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modelBg: {
    flex: 1,
    backgroundColor: 'green',
  },

  greyLine: {
    borderWidth: 1,
    width: 290,
    alignSelf: 'center',
    marginTop: 20,
  },

  question: {
    top: 20,
  },
  modalContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 200,
    height: 50,
    // backgroundColor: 'blue',
    // padding:10,
    alignItems: 'center',
    top: 30,
  },

  modalx: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    top: 640,
    height: 260,
    width: '100%',
    backgroundColor: Colors.Grey500,
    alignItems: 'center',
    padding: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalBgx: {
    height: 900,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
  },

  modalContainer1x: {
    height: 280,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Colors.Grey500,
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'black',
    padding: 20,
  },
  greyLinex: {
    borderWidth: 1,
    width: 290,
    alignSelf: 'center',
    marginTop: 20,
  },

  questionx: {
    top: 20,
  },
  modalContainerx: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'orange',
    // flex: 80,
  },
  buttonsx: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 350,
    height: 50,
    // backgroundColor: 'blue',
    // padding:10,
    // alignItems: 'center',
    top: 30,
  },
  cancelBtn: {
    backgroundColor: Colors.Grey400
  },
  logoutBtn: {
    backgroundColor: Colors.NavyBlue100
  }
});
