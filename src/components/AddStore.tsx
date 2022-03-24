import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BottomSheet } from 'react-native-btr';
import colors from '../config/colors';

type Props = {
  visible: boolean;
  toggle: () => void;
};

const AddStore = ({ visible, toggle }: Props) => {
  return (
    <BottomSheet visible={visible} onBackButtonPress={toggle} onBackdropPress={toggle}>
      <View style={styles.container}>
        <Text>Add Store</Text>
      </View>
    </BottomSheet>
  );
};

AddStore.defaultProps = {
  visible: false,
};

export default AddStore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
