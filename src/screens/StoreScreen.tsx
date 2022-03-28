import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import GlobalStyles from '../GlobalStyles';
import FAB from '../components/FAB';
import AddStore from '../components/AddStore';

const StoreScreen = () => {
  const [visible, setVisible] = useState(false);
  const toggleBottomSheet = useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text>StoreScreen</Text>
      <AddStore visible={visible} toggle={toggleBottomSheet} />
      <FAB bottom={90} onPress={toggleBottomSheet} />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({});
