import firebase from 'firebase';
import { Alert } from 'react-native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = user =>({
    type: USER_LOGIN_SUCCESS,
    user
});
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
const userRegisterSuccess = user =>({
    type: USER_REGISTER_SUCCESS,
    user
});
export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT
});
export const GET_USER = 'GET_USER';
export const getUser = () => ({
    type: GET_USER
});

export const connectionState = ({ status }) => {
    return { type: 'CHANGE_CONNECTION_STATUS', isConnected: status };
};

export const tryRegister = ({email, password}) => dispatch => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword( email, password)
        .then( user => {
            const action = userRegisterSuccess(user);
            dispatch(action);
            return user;
        })
        .catch( error => {
            return Promise.reject(error.code);
        });
};

export const tryLogout = () => dispatch => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            const action = userLogout();
            dispatch(action);
            return {logout: true};
        })
        .catch(() => {
            return {logout: false};
        });
}

export const tryLogin = ({email, password}) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword( email, password )
        .then( user => {
            const action = userLoginSuccess(user);
            dispatch(action);
            return user;
        })
        .catch( error => {
            if (error.code === 'auth/user-not-found') {
                return new Promise((resolve, reject) => {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja se cadastrar com essas informações?',
                        [{
                            text: 'Não',
                            onPress: () => resolve(),
                            style: 'cancel'
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase.auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then(resolve)
                                    .catch(reject)
                            }
                        }],
                        { cancelable: false}
                    );
                });
            }
            return Promise.reject(error.code);
        });
}