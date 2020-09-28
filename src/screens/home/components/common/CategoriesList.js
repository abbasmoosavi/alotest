/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Row, Grid } from 'react-native-easy-grid';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import Images from '../../../../assets/images/Images';
import { Strings } from '../../../../services/language';
import { LocationSettingsActions } from '../../../../redux/actions';
import { FontFamily, Integer, FontSize } from '../../../../styles';

const CategoriesData = require('../../../../mock_data/Categories.json');

const CategoriesList = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const categories = useSelector((state) => state.locationSettings.category_id);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(count + 1);
  }, [categories]);

  const prefixCategories = [
    {
      id: 0,
      title: Strings.category.title,
      icon: Images.ic_categories,
      checked: true,
    },
  ];

  useEffect(() => {
    const locationCategories = CategoriesData.map((item) => ({
      ...item,
      checked: true,
    }));
    dispatch(LocationSettingsActions.setCategoryId(prefixCategories.concat(locationCategories)));
  }, []);

  function onPressCategories(item) {
    switch (item.id) {
      case 0:
        // dispatch(ModalsActions.showLocationCategoryModal());
        break;
      default:
        // onChecked(item);
        // dispatch(LocationActions.setMarkers([]));
        // LocationServiceApi.getAll({ category_id: item.id }).then((response) => {
        //   if (response.success) {
        //     dispatch(LocationActions.setMarkers(response.data.locationInfo));
        //   } else {
        //     CustomToast.show(response.message, CustomToast.durations.LONG, CustomToast.types.ERROR);
        //   }
        // });

        break;
    }
  }

  function onChecked(item) {
    categories.map((elem) => {
      if (
        elem.id === item.id ||
        elem.id === -3 ||
        elem.id === -2 ||
        elem.id === -1 ||
        elem.id === 0
      ) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
    });
    dispatch(LocationSettingsActions.setCategoryId(categories));
  }

  return (
    <FlatList
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{
        height: hp('8%'),
        width: '100%',
        position: 'absolute',
        top: 0,
      }}
      contentContainerStyle={{ alignItems: 'center' }}
      horizontal
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      // eslint-disable-next-line consistent-return
      renderItem={({ item }) => {
        if (item.checked) {
          return (
            <TouchableOpacity
              onPress={() => onPressCategories(item)}
              style={{
                height: hp('4.5%'),
                borderRadius: hp('4%'),
                paddingVertical: wp('1%'),
                paddingHorizontal: Integer.PADDING,
                marginHorizontal: wp('1%'),
                borderColor: color.TEXT_COLOR,
                borderWidth: Integer.BORDER_WIDTH,
              }}>
              <Row style={{ alignItems: 'center' }}>
                <Grid>
                  <Image
                    resizeMode="contain"
                    tintColor={color.TEXT_COLOR}
                    style={{ width: wp('5%'), height: wp('5%') }}
                    source={
                      _.find(prefixCategories, ['id', item.id]) === undefined
                        ? { uri: item.icon_path }
                        : item.icon
                    }
                  />
                </Grid>
                <Grid>
                  <Text
                    style={{
                      marginStart: wp('2%'),
                      fontFamily: FontFamily.SUBTITLE,
                      color: color.TEXT_COLOR,
                      fontSize: FontSize.CONTENT,
                    }}>
                    {item.title}
                  </Text>
                </Grid>
              </Row>
            </TouchableOpacity>
          );
        }
      }}
    />
  );
};
export default CategoriesList;
