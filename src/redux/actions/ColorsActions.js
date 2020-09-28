import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    enableLightTheme: null,
    enableDarkTheme: null,
  },
  {
    prefix: '@@setting/',
  },
);

export const ThemeTypes = Types;
const ColorsActions = Creators;
export default ColorsActions;
