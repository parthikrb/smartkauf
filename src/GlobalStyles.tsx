import { StyleSheet } from 'react-native';
import colors from './config/colors';

const GlobalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default GlobalStyles;
