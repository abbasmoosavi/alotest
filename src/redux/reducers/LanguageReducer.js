import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from '../states/LanguageState';
import { LanguageTypes } from '../actions/LanguageActions';

export const setLanguage = (state, { value, isRTL, label }) => ({
  ...state,
  value,
  isRTL,
  label,
});

export const HANDLERS = {
  [LanguageTypes.SET_LANGUAGE]: setLanguage,
};

const LanguageReducer = createReducer(INITIAL_STATE, HANDLERS);
export default LanguageReducer;
