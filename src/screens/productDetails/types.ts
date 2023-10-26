import {RouteProp} from '@react-navigation/native';

type ProductDetailsRouteParams = {
  productId: number;
};

export type ProductDetailsRouteType = RouteProp<
  Record<string, ProductDetailsRouteParams>,
  'ProductDetails'
>;
