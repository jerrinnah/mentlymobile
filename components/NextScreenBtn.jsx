import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const NextScreenBtn = () => {
  return (
    <Pressable onPress={pressHandler}>
      <Image
        style={styles.nextIcon}
        source={require('')}
      />
    </Pressable>
  );
};

export default NextScreenBtn;

const styles = StyleSheet.create({});
