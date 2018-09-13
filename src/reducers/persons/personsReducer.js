import { SET_PERSONS, GET_PERSON } from '../../actions';

const INITIAL_STATE = {};

export default function personsReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_PERSONS:
            return action.persons;
        case GET_PERSON:
            const persons = searchPerson(state, action.id);
            return persons;
        default:
            return state;
    }
}

function searchPerson(state, id) {
    let arrayPerson = {};
    
    Object.entries(state).map(person => {
        if (person[0] === id) {
            let json = `{"${person[0]}" : ${JSON.stringify(person[1])}}`;
            arrayPerson = JSON.parse(json);;
        }
    });
    return arrayPerson;
}