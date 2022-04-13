import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StoreStackParameterList as StoreStackParameterList } from '../navigation';

export type StoreCardProperties = {
  name: string;
  location?: string | null | undefined;
  id: string;
};

const invalidLocations: Set<string | null | undefined> = new Set([
  '',
  'Getting Location...',
  'Permission to access location was denied',
]);

const StoreCard = ({ name, location, id }: StoreCardProperties) => {
  const navigation: NavigationProp<StoreStackParameterList> = useNavigation();
  const handleNavigation = () => {
    navigation?.navigate('StoreDetails', { name, id });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <Text style={styles.name}>{name}</Text>
      {!invalidLocations.has(location) && <Text style={styles.location}>{location}</Text>}
    </TouchableOpacity>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: 140,
    backgroundColor: colors.blue,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
  },
  location: {
    fontSize: 16,
    color: colors.white,
  },
});
