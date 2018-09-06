export const SEARCH_MAGIC = 'SEARCH_MAGIC';
export const searchMagic = (label, value) => {
    return {
        type: SEARCH_MAGIC,
        label,
        value
    }
};