import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AppliedSuccess = () => {
  return (
    <View style={styles.container}>
      <Text>AppliedSuccess</Text>
    </View>
  );
};

export default AppliedSuccess;

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 394,
    top: 5626.61865234375,
    left: 24480.5234375,
        borderRadius: 3,
    color:'green'
  },
});
