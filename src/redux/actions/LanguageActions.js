import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    setLanguage: ['value', 'isRTL', 'label'],
  },
  {
    prefix: '@@language/',
  },
);

export const LanguageTypes = Types;
const LanguageActions = Creators;
export default LanguageActions;
