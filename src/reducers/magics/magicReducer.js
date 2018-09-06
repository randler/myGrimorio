import { SEARCH_MAGIC } from '../../actions';


import listOfSpells from '../../../resources/data/listOfSpells.json';
import magiaTeste from '../../../resources/data/magiaTeste.json';

const INITIAL_STATE = listOfSpells;

export default function magicReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_MAGIC:
            const magicFound = search(action.label, action.value);
            return magicFound;
        default:
            return state;
    }
}

function search(label, value) {
    if (value == '') {
        return INITIAL_STATE;
    }
    const magicFound = {magics: []};
    INITIAL_STATE.magics.forEach(magic => {
        switch (label) {
            case 'name':
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