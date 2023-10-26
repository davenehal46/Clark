import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ProductsDetails from './ProductsDetails';

jest.mock('react-query', () => ({
  useQuery: jest.fn((key, fetchData) => ({
    data: fetchData(),
    isLoading: false,
  })),
}));

describe('ProductsDetails', () => {
  it('renders the component with product details', async () => {
    // Mock data
    const mockProduct = {
      id: 1,
      name: 'Auto Insurance',
      image: 'https://picsum.photos/',
      price: 200,
      unit: '€',
      description:
        'Comprehensive insurance coverage for your car, providing peace of mind and financial protection in case of accidents, theft, or damage.',
    };

    // Mock route and navigation
    const mockRoute = {
      params: {
        productId: 1,
      },
    };

    const {getByText, getByTestId} = render(
      <ProductsDetails route={mockRoute} />,
    );

    // Wait for the component to load
    await waitFor(() => {
      // Check if the product details are displayed
      expect(getByText(mockProduct.name)).toBeTruthy();
    });
  });
});
