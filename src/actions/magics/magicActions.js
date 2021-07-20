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

export const removeMyMagic = (magic, personId) => {
    const person = personId;
    const { currentUser } = firebase.auth();
    let magias;
    return async dispatch => {
        await firebase.database()
            .ref(`persons/${currentUser.uid}/${person}/myMagics`)
            .once('value', (snapshot) => {
                magias = snapshot.val();
                
            });
            
        const novasMagias = magias.filter( value => {
                if (value.name !== magic.name)
                    return true
                return false
            });

        await firebase.database()
            .ref(`persons/${currentUser.uid}/${person}/myMagics`)
            .set(null);
        await firebase.database()
            .ref(`persons/${currentUser.uid}/${person}/myMagics`)
            .set(novasMagias);
        }
}

export const saveMyMagic = (magic, person) => {

    const idPerson = Object.keys(person)[0];
    const { currentUser } = firebase.auth();
    let magias = null;
    let hasMagic = false;

    return async dispatch => {
        await firebase.database()
            .ref(`persons/${currentUser.uid}/${idPerson}/myMagics`)
            .once('value', (snapshot) => {
                magias = snapshot.val();
            });

        if (magias) {
            await magias.forEach( value => {
                if (value.name === magic.name)
                    hasMagic = true;
            });
            magias = [...magias, magic];
        } else {
            magias = [magic];
        }

            if (!hasMagic) {
                try {
                    await firebase.database()
                        .ref(`persons/${currentUser.uid}/${idPerson}/myMagics`)
                        .set(magias);
                        Alert.alert('Sucesso', 'Magia salva em seu grimório!');
                } catch(e) {
                    Alert.alert('Oops', 'Não consegui salvar a magia!');
                    console.log('Erro ao tentar salvar')
                }
            } else {
                Alert.alert('Oops', 'Essa magia já existe em seu grimório!');
            }
    
    }
}