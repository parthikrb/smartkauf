import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BottomSheet } from 'react-native-btr';
import * as Location from 'expo-location';
import colors from '../config/colors';

type Props = {
  visible: boolean;
  toggle: () => void;
};

const AddStore = ({ visible, toggle }: Props) => {
  const [location, setLocation] = useState<string>('Getting Location...');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        timeInterval: 5000,
      });

      const [position] = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const address = `${position.street as string} ${position.streetNumber as string}, ${
        position.district as string
      }, ${position.region as string} - ${position.postalCode as string}`;
      setLocation(address);
    })();
  }, []);

  useEffect(() => {
    if (errorMsg) {
      setLocation(errorMsg);
    }
  }, [errorMsg, location]);

  return (
    <BottomSheet visible={visible} onBackButtonPress={toggle} onBackdropPress={toggle}>
      <View style={styles.container}>
        <Text>{location}</Text>
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
