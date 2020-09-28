import React from 'react';
import { View, Text } from 'react-native';
import { Col } from 'react-native-easy-grid';
import { CategoriesList } from '../components/common';

const ProductsTab = () => {
  return (
    <Col>
      <CategoriesList />
    </Col>
  );
};

export default ProductsTab;
