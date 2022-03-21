import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import StoreScreen from '../screens/StoreScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import colors from '../config/colors';

type RootStackParamList = {
  Store: undefined;
  Search: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Store"
      screenOptions={({ route }: { route: RouteProp<RootStackParamList> }) => ({
        headerShown: false,
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let iconName;

          if (route.name === 'Store') {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-circle' : 'search-circle-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -5,
          marginBottom: 10,
        },
        tabBarStyle: {
          position: 'absolute',
          padding: 10,
          height: 70,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          backgroundColor: colors.black,
        },
        tabBarBackground: () => <BlurView tint="light" intensity={100} />,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.neutral,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
