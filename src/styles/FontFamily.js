import { I18nManager } from 'react-native';

export default {
  HEADER: I18nManager.isRTL ? 'IRANSansMobileFaNumBold' : 'Oswald-Medium',
  TITLE: I18nManager.isRTL ? 'Vazir-Bold' : 'Oswald-Medium',
  SUBTITLE: I18nManager.isRTL ? 'Vazir-Bold' : 'Oswald-Medium',
  CONTENT: I18nManager.isRTL ? 'Vazir' : 'Oswald-Medium',
  BUTTON: I18nManager.isRTL ? 'IRANSansMobileFaNumBold' : 'Oswald-Medium',
  TEXT_SANS: I18nManager.isRTL ? 'IRANSansMobileFaNumMedium' : 'Oswald-Medium',
  TEXT_VAZIR: I18nManager.isRTL ? 'Vazir' : 'Oswald-Medium',
};
