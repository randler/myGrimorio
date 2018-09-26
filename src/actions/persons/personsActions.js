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
