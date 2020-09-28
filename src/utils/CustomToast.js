import Toast from 'react-native-simple-toast';

const types = {
  SUCCESS: Toast.SUCCESS,
  INFO: Toast.INFO,
  WARN: Toast.WARN,
  ERROR: Toast.ERROR,
};
const durations = {
  LONG: Toast.LONG,
  SHORT: Toast.SHORT,
};

function show(message, duration, type) {
  Toast.show(message, duration, type);
  // Toast.show(message, {
  //     duration: duration,
  //     position: Toast.positions.BOTTOM,
  //     shadow: true,
  //     animation: true,
  //     textStyle: {
  //         fontFamily: FontFamily.TEXT
  //     },
  //     containerStyle: {
  //         backgroundColor: Color.NORMAL
  //     }
  // })
}

export const CustomToast = {
  show,
  types,
  durations,
};
