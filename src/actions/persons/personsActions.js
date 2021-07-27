import firebase from 'firebase';
import { Alert } from 'react-native';

export const SET_PERSONS = 'SET_PERSONS';
export const setPersons = persons => {
    return {
        type: SET_PERSONS,
        persons
    }
};

export const GET_PERSON = 'GET_PERSON';
export const getPerson = (id) => {
    return {
        type: GET_PERSON,
        id
    }
} 

export const GET_ID_PERSON = 'GET_ID_PERSON';
export const getIdPerson = () => {
    return {
        type: GET_ID_PERSON
    }
} 

export const salvarPersonagem = personagem => {
    const { currentUser } = firebase.auth();

    console.log(personagem);
    return async dispatch => {
        try {
            await firebase.database()
                    .ref('persons')
                    .child(currentUser.uid)
                    .push(personagem); 
            Alert.alert('Sucesso', 'Personagem criado!');
            return true;
        } catch(e) {
            Alert.alert('Erro', 'Erro ao tentar salvar o personagem!');
            return false;
        }
    }
}
