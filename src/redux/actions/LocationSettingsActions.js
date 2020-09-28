import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    setDiscountMinimum: ['discount_minimum'],
    setDiscountMaximum: ['discount_maximum'],

    setFollower: ['follower'],
    setDistance: ['distance'],
    setDiscount: ['discount'],

    setRadius: ['radius'],

    setCurrentRegion: ['currentRegion'],

    setCategoryId: ['category_id'],

    setRequestValues: ['item', 'value'],
  },
  {
    prefix: '@@locationSettings/',
  },
);

export const LocationSettingsTypes = Types;
const LocationSettingsActions = Creators;
export default LocationSettingsActions;
