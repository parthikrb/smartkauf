import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import React, { ReactNode } from 'react';
import colors from '../../config/colors';

const SafeAreaView = ({ children }: { children: ReactNode }) => {
  return <View style={styles.SafeArea}>{children}</View>;
};

export default SafeAreaView;

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
