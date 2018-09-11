import { SET_PERSONS, GET_PERSON } from '../../actions';

const INITIAL_STATE = [];

export default function personsReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_PERSONS:
            return action.persons;
        case GET_PERSON:
            const person = searchPerson(state, action.id);
            return person;
        default:
            return state;
    }
}

function searchPerson(state, id) {
    let arrayPerson = [];
    state.map(person => {
        if (person.idPerson === id)
            arrayPerson.push(person);
    });
    return arrayPerson;
}