import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import StoreScreen from '../screens/store-screen';
import SearchScreen from '../screens/search-screen';
import CartScreen from '../screens/cart-screen';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import colors from '../config/colors';
import StoreDetailsScreen from '../screens/store-details-screen';

export type StoreStackParameterList = {
  StoreHome: undefined;
  StoreDetails: { name: string; location?: string; id: string };
};

type RootStackParameterList = {
  Store: undefined;
  Search: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<StoreStackParameterList>();

const Tab = createBottomTabNavigator<RootStackParameterList>();

const StoreNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="StoreHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StoreHome" component={StoreScreen} />
      <Stack.Screen name="StoreDetails" component={StoreDetailsScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Store"
      screenOptions={({ route }: { route: RouteProp<RootStackParameterList> }) => ({
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

          switch (route.name) {
            case 'Store': {
              iconName = focused ? ('apps' as const) : ('apps-outline' as const);

              break;
            }
            case 'Search': {
              iconName = focused ? ('search' as const) : ('search-outline' as const);

              break;
            }
            case 'Cart': {
              iconName = focused ? ('cart' as const) : ('cart-outline' as const);

              break;
            }
            // No default
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
      <Tab.Screen name="Store" component={StoreNavigation} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
