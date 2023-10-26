import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import ProductList from './ProductList';

describe('ProductList', () => {
  it('renders the component without crashing', () => {
    const {getByPlaceholderText, getByText} = render(<ProductList />);

    // Ensure that the component renders without errors
    expect(getByPlaceholderText('Search')).toBeTruthy();
    expect(getByText('Product List')).toBeTruthy();
  });

  it('simulates a search and loads more products', async () => {
    const {getByPlaceholderText, queryByText, getByTestId} = render(
      <ProductList />,
    );

    // Simulate a search
    const searchInput = getByPlaceholderText('Search');
    fireEvent.changeText(searchInput, 'A');

    // Wait for the search to finish
    await waitFor(() => {
      // Check if the search results are displayed
      expect(queryByText('Auto Insurance')).toBeTruthy();
    });

    // Simulate loading more products
    const loadMoreButton = getByTestId('load-more-button');
    fireEvent.press(loadMoreButton);

    await waitFor(() => {
      // Check if the additional products are displayed
      expect(queryByText('Auto Insurance')).toBeTruthy();
    });
  });
});
