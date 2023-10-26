import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, RefreshControl, SafeAreaView, View} from 'react-native';

import {Product} from '../../helperModules/apis/types';
import {useQuery} from 'react-query';
import {getProducts} from '../../helperModules/apis/api';
import {ActivityIndicator, Card, Searchbar, Text} from 'react-native-paper';
import {styles} from './styles';
import theme from '../../theme';
import CustomHeader from '../../components/customHeader/customHeader';
import {useNavigation} from '@react-navigation/native';
import {AppTabNavigationType} from '../../navigation/types';

const ProductList = () => {
  const navigation = useNavigation<AppTabNavigationType>();

  // State for managing pagination, products, and search query.
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Use React Query to fetch products and manage loading state.
  const {data: productsList, isLoading} = useQuery(
    ['getProducts', page, searchQuery],
    () => getProducts({_page: page, _limit: 10, name_like: searchQuery}),
  );

  // Function to update the search query.
  const onChangeSearch = (query: string) => {
    setPage(1); // Reset the pagination when the search query changes.
    setSearchQuery(query);
  };

  // Set the header and its visibility
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <CustomHeader title="Product List" />,
    });
  }, [navigation]);

  // Update the products list when data is fetched or pagination changes.
  useEffect(() => {
    if (productsList && page > 1) {
      setProducts([...products, ...productsList]);
    } else if (productsList) {
      setProducts(productsList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, productsList]);

  // Navigate to product details.
  const goToDetails = (item: Product) => {
    navigation.navigate('ProductDetails', {
      productId: item.id,
    });
  };

  // Handle loading more products when reaching the end of the list.
  const handleLoadMore = () => {
    if (!isLoading && productsList?.length) {
      setPage(page + 1);
    }
  };

  // Render a loading indicator at the end of the product list.
  const renderFooter = () => {
    if (isLoading) {
      return null;
    } else if (productsList?.length) {
      return (
        <ActivityIndicator animating={true} color={theme.colors.appSecondary} />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search bar for filtering products. */}
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchCard}
        iconColor={theme.colors.appPrimary}
        showDivider={true}
        loading={isLoading}
        inputStyle={styles.searchInputStyle}
      />
      {isLoading ? ( // Display a loading indicator when data is loading.
        <ActivityIndicator
          animating={true}
          size={'large'}
          color={theme.colors.appPrimary}
          style={styles.container}
        />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}: {item: Product}) => (
            <Card onPress={() => goToDetails(item)} style={styles.card}>
              <View style={styles.cardImageContainer}>
                <Card.Cover
                  style={styles.cardImage}
                  resizeMethod="scale"
                  source={{uri: `${item.image}/400`}}
                />
              </View>
              <Card.Content>
                <Text style={styles.titleText} variant="titleLarge">
                  {item.name}
                </Text>
                <Text style={styles.priceText} variant="bodyLarge">
                  {item.unit}
                  {item.price}
                </Text>
              </Card.Content>
            </Card>
          )}
          numColumns={2}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0}
          onEndReached={handleLoadMore}
          contentContainerStyle={styles.gridContainer}
          refreshControl={
            // Add a refresh control to pull to refresh the product list.
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                setTimeout(() => {
                  setPage(1);
                  setSearchQuery('');
                }, 1000);
              }}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default ProductList;
