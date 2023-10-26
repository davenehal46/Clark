import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Card, Text} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';
import CustomHeader from '../../components/customHeader/customHeader';
import {useQuery} from 'react-query';
import {getProduct} from '../../helperModules/apis/api';
import theme from '../../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppTabNavigationType} from '../../navigation/types';
import {ProductDetailsRouteType} from './types';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

const ProductsDetails = () => {
  // Get the route and navigation objects from React Navigation.
  const route = useRoute<ProductDetailsRouteType>();
  const navigation = useNavigation<AppTabNavigationType>();
  const {productId} = route.params;

  // Use React Query to fetch the product details and manage loading state.
  const {data: product, isLoading} = useQuery(['getProduct', productId], () =>
    getProduct(productId),
  );

  // Set the header and its visibility using useLayoutEffect.
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <CustomHeader title={product ? product.name : ''} />,
    });
  }, [navigation, product, product?.name]);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          size={'large'}
          color={theme.colors.appPrimary}
          style={styles.container}
        />
      ) : (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          sharedTransitionTag="tag">
          <Card style={styles.card}>
            <View style={styles.cardImageContainer}>
              <Text style={styles.priceText} variant="bodyLarge">
                {product && product.unit}
                {product && product.price}
              </Text>
              <Card.Cover
                style={styles.cardImage}
                resizeMethod="scale"
                source={{uri: `${product && product.image}/600`}}
              />
            </View>
            <Card.Content>
              <Text style={styles.titleText} variant="bodyLarge">
                {product && product.description}
              </Text>
            </Card.Content>
          </Card>
        </Animated.View>
      )}
    </ScrollView>
  );
};

export default ProductsDetails;
