import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import magicReducer from './magics/magicReducer';

export default combineReducers({
    user: userReducer,
    all_magics: magicReducer

});