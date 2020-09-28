import RNSplashScreen from 'react-native-splash-screen';

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

const Helper = {
  getLanguageData,
  hideSplash,
};
export default Helper;
