import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import GlobalStyles from '../GlobalStyles';
import FAB from '../components/FAB';

const StoreScreen = () => {
  const handleAddStore = useCallback(() => {}, []);
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text>StoreScreen</Text>
      <FAB bottom={90} onPress={handleAddStore} />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({});
