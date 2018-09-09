import { SET_PERSONS, GET_PERSONS } from '../../actions';


import personPattern from '../../../resources/data/json/personPattern.json';

const INITIAL_STATE = personPattern;

export default function personsReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_PERSONS:
        console.log('reducer: ', action.persons);
            return action.persons;
        default:
            return state;
    }
}