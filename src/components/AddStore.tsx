import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BottomSheet } from 'react-native-btr';
import { Ionicons } from '@expo/vector-icons';
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
        <Text style={styles.title}>New Store</Text>

        <TextInput style={styles.input} placeholder="Store Name" />
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color={colors.black} />
          <Text style={styles.location}>{location}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={toggle}>
          <Text style={styles.buttonText}>Add Store</Text>
        </TouchableOpacity>
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
    height: 280,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
  },
  input: {
    borderBottomWidth: 0.8,
    borderColor: colors.neutral,
    width: '80%',
    height: 40,
    fontSize: 24,
    padding: 5,
    paddingBottom: 0,
    marginBottom: 30,
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    flexWrap: 'wrap',
  },
  location: {
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
