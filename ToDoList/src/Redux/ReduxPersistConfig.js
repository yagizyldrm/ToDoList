import AsyncStorage from '@react-native-community/async-storage';
import { USER_NAMESPACE } from '../Modules/Auth';

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ['nav', 'app'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: [
      'theming',
      USER_NAMESPACE
    ],
  },
};

export default REDUX_PERSIST;
