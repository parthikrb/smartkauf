import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import GlobalStyles from '../GlobalStyles';
import FAB from '../components/FAB';
import AddStore from '../components/AddStore';
import { useGetStoresQuery } from '../generated/graphql';
import StoreCard from '../components/StoreCard';

const StoreScreen = () => {
  const [visible, setVisible] = useState(false);
  const { data, error, loading } = useGetStoresQuery({
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
          key={data && data.stores.length}
          renderItem={({ item }) => <StoreCard {...item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <AddStore visible={visible} toggle={toggleBottomSheet} />
      <FAB bottom={90} onPress={toggleBottomSheet} />
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
