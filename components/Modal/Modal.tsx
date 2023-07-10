import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../utils/Colors';
import ShortButton from '../Buttons/ShortButton';
import { Modal } from 'react-native';
import BigText from '../SmallText/BigText';
import RegularText from '../SmallText/RegularText';
import MidButton from '../Buttons/MidButton';

interface ModalProps {
  title: string;
  isOpen: boolean;
  children: string;
    onClose: () => void;
    isClose: boolean;
}
const ModalPop: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
children,
  isClose
}) => {
  // const [modal, setModal] = useState(false);

  // const openModal = () => {
  //     setModal(!modal)
  // }
  // const cancelModal = () => {
  //     setModal(modal)
  // }

  return (
      <>
          {
              isOpen ?
       
      <Modal visible={true} transparent={true} animationType={'slide'}>
        <TouchableOpacity style={styles.modalBg}>
          <View style={styles.modalContainer1}>
            <BigText>Logout</BigText>

            <View style={styles.greyLine}></View>

            <RegularText style={styles.question}>
              Are you sure, you want to log out?
            </RegularText>

            <View style={styles.buttons}>
              <MidButton>
                <RegularText>Cancel</RegularText>
              </MidButton>
              <MidButton onPress={onClose}>
                <RegularText>Yes, Logout</RegularText>
              </MidButton>
              {/* <ShortButton>Yes, Logout</ShortButton> */}
            </View>
          </View>
        </TouchableOpacity>
                  </Modal> : isClose
             }
    </>
  );
};

export default ModalPop;

const styles = StyleSheet.create({
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
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
  },

  modalContainer1: {
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
    // backgroundColor: 'orange',
    // flex: 80,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 350,
    height: 50,
    // backgroundColor: 'blue',
    // padding:10,
    // alignItems: 'center',
    top: 30,
  },
});
