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