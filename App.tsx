import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Navigation from './src/navigation';
import SafeAreaView from './src/components/SafeAreaView';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
