import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import { StoreStackParamList } from '../navigation';

const StoreDetailsScreen = () => {
  const route: RouteProp<StoreStackParamList> = useRoute();

  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.headerText}>{route?.params?.name}</Text>
    </View>
  );
};

export default StoreDetailsScreen;

const styles = StyleSheet.create({});
