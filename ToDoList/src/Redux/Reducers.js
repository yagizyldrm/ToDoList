// Packages
import { combineReducers } from 'redux';
import { userReducer, USER_NAMESPACE } from '../Modules/Auth';

// Reducers
import { ThemeReducer } from '../Modules/Theming';
import { LocalizationReducer } from '../Modules/Localization';

export default combineReducers({
  theme: ThemeReducer,
  localization: LocalizationReducer,
  [USER_NAMESPACE]: userReducer,
});


