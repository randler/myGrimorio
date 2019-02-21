import { 
    USER_LOGOUT,
    USER_LOGIN_SUCCESS, 
    USER_REGISTER_SUCCESS, 
    GET_USER
} from '../../actions';

export default function userReducer (state = [], action) {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return action.user;
        case USER_REGISTER_SUCCESS:
            return action.user;
        case GET_USER:
            return state;
        case USER_LOGOUT:
            return null;
        default:
            return state;
    }
}