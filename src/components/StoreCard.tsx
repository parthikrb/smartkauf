import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

type StoreCardProps = {
  name: string;
  location?: string | null | undefined;
};

const StoreCard = ({ name, location }: StoreCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
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
