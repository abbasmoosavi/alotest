import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { useSelector } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FontFamily, FontSize, Integer } from '../../../../styles';
import { Helper } from '../../../../utils';
import ProgressiveImage from './ProgressiveImage';

const ProductList = ({ data, navigation }) => {
  const color = useSelector((state) => state.color);
  const language = useSelector((state) => state.language);

  const renderItem = ({ item }) => {
    return (
      <Row
        style={{
          alignSelf: 'center',
          width: '92%',
          height: hp('25%'),
          alignItems: 'center',
          padding: Integer.PADDING,
          backgroundColor: color.BACKGRAND_BOX,
          marginTop: hp('2%'),
          borderRadius: Integer.MODAL_RADIUS,
          shadowColor: color.SHADOW,
          shadowOffset: {
            width: 0,
            height: Integer.SHADOW_HEIGHT,
          },
          shadowOpacity: 0.3,
          shadowRadius: Integer.MODAL_RADIUS,
          elevation: Integer.SHADOW_ELEVATION,
        }}>
        <Col style={{ width: '70%', alignItems: 'flex-start' }}>
          <Grid>
            <Text
              numberOfLines={2}
              style={{
                textAlign: 'left',
                color: color.TEXT_TITLE,
                fontSize: FontSize.CONTENT,
                fontFamily: FontFamily.TITLE,
              }}>
              {item.title}
            </Text>
          </Grid>
          <Grid>
            <Text
              style={{
                color: color.TEXT_TITLE,
                fontSize: FontSize.CONTENT,
                fontFamily: FontFamily.CONTENT,
              }}>
              {item.price}
            </Text>
          </Grid>
          <Grid>
            <Text
              style={{
                textAlign: 'left',
                color: color.TEXT_SUBTITLE,
                fontSize: FontSize.CONTENT,
                fontFamily: FontFamily.TEXT_VAZIR,
              }}>
              {Helper.convertDate(language, item.created_at)}
            </Text>
          </Grid>
          <Grid>
            <TouchableOpacity
              onPress={() => navigation.navigate('map')}
              style={{
                height: hp('5%'),
                width: wp('20%'),
                borderRadius: Integer.BUTTON_RADIUS,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: color.AMARANTH,
              }}>
              <Text
                style={{
                  color: color.BUTTON_TEXT,
                  fontSize: FontSize.CONTENT,
                  fontFamily: FontFamily.TEXT_VAZIR,
                }}>
                خرید
              </Text>
            </TouchableOpacity>
          </Grid>
        </Col>
        <Col
          style={{
            width: '30%',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <ProgressiveImage
            resizeMode="cover"
            style={{
              width: wp('40%'),
              height: wp('40%'),
              alignSelf: 'flex-end',
            }}
            source={{
              uri: item.image_path,
            }}
          />
        </Col>
      </Row>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data}
      style={{ width: '100%' }}
      contentContainerStyle={{ width: '100%' }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default ProductList;
