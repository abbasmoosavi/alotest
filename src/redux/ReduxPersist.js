import { createTransform } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { MODE, darkTheme, baseTheme, lightTheme } from '../styles/Color';

const colorTransform = createTransform(
  (inbound) => {
    /**
     * Inbound states that should be stored in storage
     */
    return { ...inbound, mode: inbound.mode };
  },
  (outbound) => {
    /**
     * Outbound states that should be rehhydrated
     */
    if (outbound.mode === MODE.DARK) {
      return { mode: MODE.DARK, ...darkTheme, ...baseTheme };
    }
    if (outbound.mode === MODE.LIGHT) {
      return { mode: MODE.LIGHT, ...lightTheme, ...baseTheme };
    }
    return { ...outbound, ...lightTheme, ...baseTheme };
  },
  {
    whitelist: ['color'],
  },
);

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'irio_appv214',
    storage: AsyncStorage,
    timeout: 0,
    // Reducer keys that you do NOT want stored to persistence here.
    // blacklist: [],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: ['language', 'color', 'locationSettings'],
    transforms: [colorTransform],
  },
};

export default REDUX_PERSIST;
