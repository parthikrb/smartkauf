import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAB from '../components/FAB';
import colors from '../config/colors';
import GlobalStyles from '../GlobalStyles';
import { StoreStackParamList } from '../navigation';

const StoreDetailsScreen = () => {
  const route: RouteProp<StoreStackParamList> = useRoute();
  const navigation: NavigationProp<StoreStackParamList> = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={GlobalStyles.screenContainer}>
      <View style={styles.header}>
        <Ionicons name="arrow-back-sharp" size={34} color={colors.black} onPress={handleGoBack} />
        <Text style={GlobalStyles.headerText}>{route?.params?.name}</Text>
      </View>
      <FAB bottom={90} onPress={() => {}} />
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
