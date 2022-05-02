/* eslint-disable @typescript-eslint/no-misused-promises */
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddArticle from '../components/add-article';
import FAB from '../components/floating-action-button';
import colors from '../config/colors';
import { GetStoresDocument, Store, useDeleteStoreMutation } from '../generated/graphql';
import GlobalStyles from '../global-styles';
import { StoreStackParameterList as StoreStackParameterList } from '../navigation';

const StoreDetailsScreen = () => {
  const route: RouteProp<StoreStackParameterList> = useRoute();
  const navigation: NavigationProp<StoreStackParameterList> = useNavigation();
  const [visible, setVisible] = useState(false);

  const [deleteStoreMutation] = useDeleteStoreMutation({
    variables: {
      id: route.params?.id as string,
    },
    update: (cache, { data }) => {
      if (data?.deleteStore) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { stores }: { stores: Store[] } = cache.readQuery({
          query: GetStoresDocument,
        });
        cache.writeQuery({
          query: GetStoresDocument,
          data: {
            stores: stores?.filter((store: Store) => store.id !== data.deleteStore?.id),
          },
        });
      }
    },
  });

  const handleGoBack = () => {
    navigation.goBack();
  };

  const toggleBottomSheet = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const handleDeleteStore = async () => {
    await deleteStoreMutation();
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.screenContainer}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Ionicons name="arrow-back-sharp" size={34} color={colors.black} onPress={handleGoBack} />
          <Text style={GlobalStyles.headerText}>{route?.params?.name}</Text>
        </View>
        {process.env.NODE_ENV === 'development' && (
          <Ionicons
            name="ios-trash"
            size={34}
            color={colors.error}
            onPress={handleDeleteStore}
            testID="deleteStore"
          />
        )}
      </View>
      <AddArticle
        visible={visible}
        toggle={toggleBottomSheet}
        store={route?.params?.id as string}
      />
      <FAB bottom={90} onPress={toggleBottomSheet} />
    </View>
  );
};

export default StoreDetailsScreen;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
