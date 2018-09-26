import { SEARCH_MAGIC, CLEAR_FILTER, SET_MAGICS } from '../../actions';

import listOfSpells from '../../../resources/data/json/listOfSpells.json';

const INITIAL_STATE = [];

export default function magicReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_MAGIC:
            const magicFound = search(action.value);
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

function search(value) {

    if (!value.name && !value.level && !value.classe)
        return INITIAL_STATE;
    
    let magicFound = INITIAL_STATE.filter(magic => {
        console.log(magic.classes);
        if ((value.name && magic.name.toLowerCase().includes(value.name.toLowerCase())) && 
            (value.level && magic.level == value.level) &&
            (value.classe && magic.classes.contains(value.classe)))
                return true;
        else if ((value.name && magic.name.toLowerCase().includes(value.name.toLowerCase())) && 
                (value.level && magic.level == value.level) &&
                !value.classe )
                    return true;
        else if (!value.name && 
                (value.level && magic.level == value.level) &&
                (value.classe && magic.classes.contains(value.classe)))
                    return true;
        else if (!value.name  && 
                (value.level && magic.level == value.level) &&
                !value.classe )
                    return true;
        else if ((value.name && magic.name.toLowerCase().includes(value.name.toLowerCase())) && 
                !value.level &&
                !value.classe)
                    return true;
        else if (!value.name  && 
                !value.level  &&
                (value.classe && magic.classes.contains(value.classe)))
                    return true;
        else if ((value.name && magic.name.toLowerCase().includes(value.name.toLowerCase())) && 
                !value.level &&
                (value.classe && magic.classes.contains(value.classe)))
                    return true;
        else 
            return false
    })
    return magicFound;
}