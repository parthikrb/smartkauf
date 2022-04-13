/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddArticle from '../components/add-article';
import FAB from '../components/floating-action-button';
import colors from '../config/colors';
import GlobalStyles from '../global-styles';
import { StoreStackParameterList as StoreStackParameterList } from '../navigation';

const StoreDetailsScreen = () => {
  const route: RouteProp<StoreStackParameterList> = useRoute();
  const navigation: NavigationProp<StoreStackParameterList> = useNavigation();
  const [visible, setVisible] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const toggleBottomSheet = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <View style={GlobalStyles.screenContainer}>
      <View style={styles.header}>
        <Ionicons name="arrow-back-sharp" size={34} color={colors.black} onPress={handleGoBack} />
        <Text style={GlobalStyles.headerText}>{route?.params?.name}</Text>
      </View>
      <AddArticle visible={visible} toggle={toggleBottomSheet} store={route?.params?.id!} />
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
});
