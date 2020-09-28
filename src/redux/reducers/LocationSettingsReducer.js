import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from '../states/LocationSettingsState';
import { LocationSettingsTypes } from '../actions/LocationSettingsActions';

export const setDiscountMinimum = (state, { discount_minimum }) => ({
  ...state,
  discount_minimum,
});

export const setDiscountMaximum = (state, { discount_maximum }) => ({
  ...state,
  discount_maximum,
});

export const setFollower = (state, { follower }) => ({
  ...state,
  follower,
});

export const setDistance = (state, { distance }) => ({
  ...state,
  distance,
});

export const setDiscount = (state, { discount }) => ({
  ...state,
  discount,
});

export const setRadius = (state, { radius }) => ({
  ...state,
  radius,
});

export const setCurrentRegion = (state, { currentRegion }) => ({
  ...state,
  currentRegion,
});

export const setCategoryId = (state, { category_id }) => ({
  ...state,
  category_id,
});

export const setRequestValues = (state, { item, value }) => {
  switch (item) {
    case 'requestCategoryId':
      return {
        ...state,
        requestCategoryId: value,
      };
    case 'requestOwnerId':
      return {
        ...state,
        requestOwnerId: value,
      };
    case 'requestAdminsId':
      return {
        ...state,
        requestAdminsId: value,
      };
    case 'requestTitle':
      return {
        ...state,
        requestTitle: value,
      };
    case 'requestDescription':
      return {
        ...state,
        requestDescription: value,
      };
    case 'requestDiscountMin':
      return {
        ...state,
        requestDiscountMin: value,
      };
    case 'requestDiscountMax':
      return {
        ...state,
        requestDiscountMax: value,
      };
    case 'requestCover':
      return {
        ...state,
        requestCover: value,
      };
    case 'requestLink':
      return {
        ...state,
        requestLink: value,
      };
    case 'requestPhone':
      return {
        ...state,
        requestPhone: value,
      };
    case 'requestAddress':
      return {
        ...state,
        requestAddress: value,
      };
    case 'currentRegion':
      return {
        ...state,
        currentRegion: value,
      };
    case 'requestDays':
      return {
        ...state,
        requestDays: value,
      };
    case 'requesthours':
      return {
        ...state,
        requesthours: value,
      };
    case 'requestInvitationCode':
      return {
        ...state,
        requestInvitationCode: value,
      };
    default:
      return null;
  }
};

export const HANDLERS = {
  [LocationSettingsTypes.SET_DISCOUNT_MINIMUM]: setDiscountMinimum,
  [LocationSettingsTypes.SET_DISCOUNT_MAXIMUM]: setDiscountMaximum,

  [LocationSettingsTypes.SET_FOLLOWER]: setFollower,
  [LocationSettingsTypes.SET_DISTANCE]: setDistance,
  [LocationSettingsTypes.SET_DISCOUNT]: setDiscount,

  [LocationSettingsTypes.SET_RADIUS]: setRadius,

  [LocationSettingsTypes.SET_CURRENT_REGION]: setCurrentRegion,

  [LocationSettingsTypes.SET_CATEGORY_ID]: setCategoryId,

  [LocationSettingsTypes.SET_REQUEST_VALUES]: setRequestValues,
};

const LocationSettingsReducer = createReducer(INITIAL_STATE, HANDLERS);
export default LocationSettingsReducer;
