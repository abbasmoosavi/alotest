import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from '../states/ColorsStates';
import { ThemeTypes } from '../actions/ColorsActions';
import { darkTheme, lightTheme, MODE, baseTheme } from '../../styles/Color';

export const enableDarkTheme = () => ({
  mode: MODE.DARK,
  ...baseTheme,
  ...darkTheme,
});

export const enableLightTheme = () => ({
  mode: MODE.LIGHT,
  ...baseTheme,
  ...lightTheme,
});

export const HANDLERS = {
  [ThemeTypes.ENABLE_DARK_THEME]: enableDarkTheme,
  [ThemeTypes.ENABLE_LIGHT_THEME]: enableLightTheme,
};

const ColorsReducer = createReducer(INITIAL_STATE, HANDLERS);
export default ColorsReducer;
