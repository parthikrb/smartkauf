import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import colors from '../config/colors';

export type FABProperties = {
  bottom?: number;
  onPress: () => void;
  testID?: string;
};

const FAB = ({ bottom, onPress, testID = 'FAB' }: FABProperties) => {
  return (
    <TouchableOpacity
      style={[styles.FAB, { bottom: bottom ? bottom : 20 }]}
      onPress={onPress}
      testID={testID}
    >
      <Ionicons name="add-outline" size={40} color={colors.white} testID={`${testID}-icon`} />
    </TouchableOpacity>
  );
};

export default FAB;

const styles = StyleSheet.create({
  FAB: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
