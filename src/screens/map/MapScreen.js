/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import { View, Text } from 'react-native';
import { Col } from 'react-native-easy-grid';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { Images, DarkMap } from '../../assets';

const MapScreen = () => {
  const color = useSelector((state) => state.color);
  const currentRegion = {
    latitude: 32.344707,
    longitude: 51.508196,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  };
  let map = null;

  return (
    <Col>
      <MapView
        ref={(ref) => (map = ref)}
        provider={PROVIDER_GOOGLE}
        style={{ height: '100%', width: '100%' }}
        customMapStyle={color.mode === 'dark' ? DarkMap : []}
        region={currentRegion}
        onRegionChange={(region) => {
          currentRegion = region;
        }}
      />
    </Col>
  );
};

export default MapScreen;
