import firebase from 'firebase';
import { Alert } from 'react-native';

export const SEARCH_MAGIC = 'SEARCH_MAGIC';
export const searchMagic =  value => {
    return {
        type: SEARCH_MAGIC,
        value
    }
};
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const clearFilter = () => {
    return {
        type: CLEAR_FILTER
    }
};
export const INICIAR = 'INICIAR';
export const iniciar = magics => {
    return {
        type: INICIAR,
        magics
    }
};
export const SET_MAGICS = 'SET_MAGICS';
export const setMagics = magics => {
    return {
        type: SET_MAGICS,
        magics
    }
};

export const getMyMagics = (keyPerson) => {
    const { currentUser } = firebase.auth();
    const person = keyPerson;
    let magias;
    return async dispatch => {
        await firebase.database()
            .ref(`persons/${currentUser.uid}/${person}/myMagics`)
            .once('value', (snapshot) => {
                magias = snapshot.val();    
            });
            if(magias){
                return magias;
            }
            return null;
        }
}

export const saveMyMagic = (magic, person) => {

    const idPerson = Object.keys(person)[0];
    const { currentUser } = firebase.auth();
    let magias;
    return async dispatch => {
        await firebase.database()
            .ref(`persons/${currentUser.uid}/${idPerson}/myMagics`)
            .on('value', (snapshot) => {
                magias = snapshot.val();
                
            });
        if(magias){
            magias.filter( value => {
                if (value.name === magic.name)
                    return Alert.alert('Oops', 'Essa magia já existe em seu grimório!')
            });
            magias = [...magias, magic];
        } else
            magias = [magic];

        await firebase.database()
            .ref(`persons/${currentUser.uid}/${idPerson}/myMagics`)
            .set(magias);
        }
    
}