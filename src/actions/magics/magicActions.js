export const SEARCH_MAGIC = 'SEARCH_MAGIC';
export const searchMagic = (label, value) => {
    return {
        type: SEARCH_MAGIC,
        label,
        value
    }
};
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const clearFilter = () => {
    return {
        type: CLEAR_FILTER
    }
};
export const INICIAR = 'INICIAR';
export const iniciar = () => {
    return {
        type: INICIAR
    }
};