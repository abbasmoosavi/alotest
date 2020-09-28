import React from 'react';
import { Col } from 'react-native-easy-grid';
import { useSelector } from 'react-redux';

const OrdersTab = () => {
  const color = useSelector((state) => state.color);

  return (
    <Col style={{ width: '100%', height: '100%', backgroundColor: color.BACKGROUND_MAIN }}></Col>
  );
};

export default OrdersTab;
