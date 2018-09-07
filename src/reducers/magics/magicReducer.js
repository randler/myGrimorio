import { SEARCH_MAGIC, CLEAR_FILTER, INICIAR } from '../../actions';


import listOfSpells from '../../../resources/data/listOfSpells.json';

const INITIAL_STATE = listOfSpells;

export default function magicReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_MAGIC:
            const magicFound = search(state, action.label, action.value);
            return magicFound;
        case CLEAR_FILTER: 
            return INITIAL_STATE;
        case INICIAR: 
            return INITIAL_STATE;
        default:
            return state;
    }
}

function search(state, label, value) {

    const magicFound = {magics: []};
    state.magics.forEach(magic => {
        switch (label) {
            case 'nome':
                if (magic.name.toLowerCase().includes(value.toLowerCase())) {
                    magicFound.magics.push(magic);
                }
                break;
            case 'nivel':
                if (magic.level == value) {
                    magicFound.magics.push(magic);
                }
                break;
            case 'classe':
                magic.classes.forEach(classe => {
                   if (classe.includes(value)) {
                    magicFound.magics.push(magic);
                   } 
                });
                break;
        }
    });
    return magicFound;
}