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
            const magics = action.magics;
            return magics;
        default:
            return state;
    }
}

function search(value) {

    if (!value.name && !value.level && !value.classe)
        return INITIAL_STATE;
    
    let magicFound = INITIAL_STATE.filter(magic => {
            magicClass = (value.classe && magic.classes && magic.classes.indexOf(value.classe) > -1) ? true : false;
            magicName = (value.name && magic.name.toLowerCase().indexOf(value.name.toLowerCase()) > -1) ? true : false;
            magicLevel = (value.level && magic.level == value.level) ? true: false;

        if ((value.name && magicName) && 
            (value.level && magicLevel) &&
            (value.classe && magicClass))
                return true;
        else if ((value.name && magicName) && 
                (value.level && magicLevel) &&
                !value.classe )
                    return true;
        else if (!value.name && 
                (value.level && magicLevel) &&
                (value.classe && magicClass))
                    return true;
        else if (!value.name  && 
                (value.level && magicLevel) &&
                !value.classe )
                    return true;
        else if ((value.name && magicName) && 
                !value.level &&
                !value.classe)
                    return true;
        else if (!value.name  && 
                !value.level  &&
                (value.classe && magicClass))
                    return true;
        else if ((value.name && magicName) && 
                !value.level &&
                (value.classe && magicClass))
                    return true;
        else 
            return false
    })
    return magicFound;
}