/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-assignment */
/* eslint-disable no-undef */
/* eslint-disable no-var */
import RNSplashScreen from 'react-native-splash-screen';
import m from 'moment-jalaali';
import fa from 'moment/src/locale/fa';

function getLanguageData() {
  return [
    { value: 'en', isRTL: false, label: 'English' },
    { value: 'fa', isRTL: true, label: 'فارسی' },
  ];
}

function hideSplash(withDelay = true) {
  if (withDelay) {
    setTimeout(() => {
      RNSplashScreen.hide();
    }, 1000);
  } else {
    RNSplashScreen.hide();
  }
}

function convertDate(language, date) {
  const calender = m
    .utc(date, 'YYYY-MM-DDTHH:mm:ss')
    .utcOffset(getTimezone())
    .format('YYYY-MM-DDTHH:mm:ss');
  if (language.value === 'fa') {
    m.locale('fa', fa);
    m.loadPersian({ dialect: 'persian-modern' });
  }
  return m.utc(calender, 'YYYY-MM-DDTHH:mm:ss').calendar();
}

function getTimezone() {
  const date = `${new Date()}`;
  return date.substr(date.lastIndexOf('+'), 5);
}

const Helper = {
  getLanguageData,
  hideSplash,
  convertDate,
};
export default Helper;
