import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import GlobalStyles from '../global-styles';
import FAB from '../components/floating-action-button';
import AddStore from '../components/add-store';
import { useGetStoresQuery } from '../generated/graphql';
import StoreCard from '../components/store-card';

const StoreScreen = () => {
  const [visible, setVisible] = useState(false);
  const { data } = useGetStoresQuery({
    fetchPolicy: 'network-only',
  });
  const toggleBottomSheet = useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.headerText}>Stores</Text>
      <View
        style={[
          styles.storesContainer,
          {
            height: Dimensions.get('window').height - 160,
          },
        ]}
      >
        <FlatList
          data={data && data.stores}
          numColumns={2}
          // eslint-disable-next-line unicorn/explicit-length-check
          key={data && data.stores.length}
          renderItem={({ item }) => <StoreCard {...item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <AddStore visible={visible} toggle={toggleBottomSheet} />
      <FAB bottom={90} onPress={toggleBottomSheet} testID="addStore" />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  storesContainer: {
    width: '100%',
    overflow: 'scroll',
  },
});
