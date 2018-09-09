export const SET_PERSONS = 'SET_PERSONS';
export const setPersons = persons => {
    return {
        type: SET_PERSONS,
        persons
    }
};