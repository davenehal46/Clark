import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../theme';
import ProductListScreen from '../screens/productList';
import ProductDetailsScreen from '../screens/productDetails';
import {ScreenOptions} from './types';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  headerShown: true,
  tabBarStyle: {backgroundColor: theme.colors.white},
};

const screenOptions: Record<string, ScreenOptions> = {
  ProductList: {
    tabBarLabel: 'Product List',
    tabBarIcon: ({color, size}) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
    tabBarLabelStyle: {
      fontSize: 16,
    },
  },
  ProductDetails: {
    tabBarLabel: 'Product Details',
    tabBarIcon: ({color, size}) => (
      <MaterialCommunityIcons name="notebook" color={color} size={size} />
    ),
    tabBarLabelStyle: {
      fontSize: 16,
    },
  },
};

const AppContainer: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions} initialRouteName="ProductList">
      <Tab.Screen
        name="ProductList"
        component={ProductListScreen}
        options={screenOptions.ProductList}
      />
      <Tab.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        initialParams={{productId: 1}}
        options={screenOptions.ProductDetails}
      />
    </Tab.Navigator>
  );
};

export default AppContainer;
