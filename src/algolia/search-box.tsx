import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { connectSearchBox } from 'react-instantsearch-native';
import colors from '../config/colors';

type SearchBoxProperties = {
  currentRefinement: string;
  refine: (value: string) => void;
};

const SearchBox = ({ currentRefinement, refine }: SearchBoxProperties) => (
  <TextInput
    style={styles.input}
    onChangeText={(value) => refine(value)}
    value={currentRefinement}
    placeholder="potato"
  />
);

const styles = StyleSheet.create({
  input: {
    height: 48,
    padding: 10,
    paddingLeft: 18,
    fontSize: 24,
    backgroundColor: colors.white,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.neutral,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default connectSearchBox(SearchBox);
