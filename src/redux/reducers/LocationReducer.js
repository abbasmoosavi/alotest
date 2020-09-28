import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from '../states/LocationStates';
import { LocationTypes } from '../actions/LocationActions';

export const setChoosedRegion = (state, { choosedRegion }) => ({
  ...state,
  choosedRegion,
});

export const setMarkers = (state, { markers }) => ({
  ...state,
  markers,
});

export const setBackgroundColorBottomDrawer = (state, { backgroundColorBottomDrawer }) => ({
  ...state,
  backgroundColorBottomDrawer,
});

export const setMarkerPage = (state, { markerPage }) => ({
  ...state,
  markerPage,
});

export const HANDLERS = {
  [LocationTypes.SET_MARKERS]: setMarkers,
  [LocationTypes.SET_CHOOSED_REGION]: setChoosedRegion,
  [LocationTypes.SET_BACKGROUND_COLOR_BOTTOM_DRAWER]: setBackgroundColorBottomDrawer,
  [LocationTypes.SET_MARKER_PAGE]: setMarkerPage,
};

const LocationReducer = createReducer(INITIAL_STATE, HANDLERS);
export default LocationReducer;
