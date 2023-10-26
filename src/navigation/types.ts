import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type ScreenOptions = {
  tabBarLabel: string;
  tabBarIcon: (props: {color: string; size: number}) => JSX.Element;
  tabBarLabelStyle?: {fontSize: number};
};

type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: {productId: number};
};

type AppTabNavigation = BottomTabNavigationProp<
  RootStackParamList,
  'ProductList'
>;

export type AppTabNavigationType = AppTabNavigation;
