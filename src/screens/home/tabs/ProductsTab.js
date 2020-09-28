import React from 'react';
import { Col } from 'react-native-easy-grid';
import { useSelector } from 'react-redux';
import { CategoriesList, ProductList } from '../components/common';

const Products = require('../../../mock_data/Products.json');

const ProductsTab = () => {
  const color = useSelector((state) => state.color);

  return (
    <Col style={{ width: '100%', height: '100%', backgroundColor: color.BACKGROUND_MAIN }}>
      <CategoriesList />
      <ProductList data={Products} />
    </Col>
  );
};

export default ProductsTab;
