import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import colors from '../config/colors';

type FABProps = {
  bottom?: number;
};

const FAB = ({ bottom }: FABProps) => {
  return (
    <TouchableOpacity style={[styles.FAB, { bottom: bottom ? bottom : 20 }]}>
      <Ionicons name="add-outline" size={40} color={colors.white} />
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
