import { SEARCH_MAGIC, CLEAR_FILTER, SET_MAGICS } from '../../actions';

import listOfSpells from '../../../resources/data/json/listOfSpells.json';

const INITIAL_STATE = [];

export default function magicReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_MAGIC:
            const magicFound = search(state, action.label, action.value);
            return magicFound;
        case CLEAR_FILTER: 
            return INITIAL_STATE;
        case SET_MAGICS:
            INITIAL_STATE = action.magics;
            return action.magics;
        default:
            return state;
    }
}

function search(state, label, value) {

    const magicFound = [];
    state.map(magic => {
        switch (label) {
            case 'nome':
                if (magic.name.toLowerCase().includes(value.toLowerCase())) {
                    magicFound.push(magic);
                }
                break;
            case 'nivel':
                if (magic.level == value) {
                    magicFound.push(magic);
                }
                break;
            case 'classe':
            if (magic.classes)
                magic.classes.map(classe => {
                   if (classe.includes(value)) {
                    magicFound.push(magic);
                   } 
                });
                break;
        }
    });
    return magicFound;
}