import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    setChoosedRegion: ['choosedRegion'],
    setMarkers: ['markers'],
    setBackgroundColorBottomDrawer: ['backgroundColorBottomDrawer'],
    setMarkerPage: ['markerPage'],
  },
  {
    prefix: '@@location/',
  },
);

export const LocationTypes = Types;
const LocationActions = Creators;
export default LocationActions;
