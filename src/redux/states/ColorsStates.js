import { MODE, baseTheme, darkTheme } from '../../styles/Color';

export const INITIAL_STATE = {
  mode: MODE.DARK,
  ...baseTheme,
  ...darkTheme,
};
