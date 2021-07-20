import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import magicReducer from './magics/magicReducer';
import personsReducer from './persons/personsReducer';

export default combineReducers({
    user: userReducer,
    all_magics: magicReducer,
    persons: personsReducer

});