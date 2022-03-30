import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export type StoreCardProps = {
  name: string;
  location?: string | null | undefined;
};

type Location = string | null | undefined;

const invalidLocations: Location[] = [
  '',
  'Getting Location...',
  'Permission to access location was denied',
];

const StoreCard = ({ name, location }: StoreCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      {!invalidLocations.includes(location) && <Text style={styles.location}>{location}</Text>}
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
