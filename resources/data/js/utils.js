import { PersonBean } from '../../../src/bean/personBean';

export const NIVEIS = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
export const VALUES_TRIBUTE = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25', '26', '27', '28', '29', '30'];

export const getBonusProficiencia = nivelTotal => {
    switch (nivelTotal) {
        case '1':
        case '2':
        case '3':
        case '4':
            return '+2';
        case '5':
        case '6':
        case '7':
        case '8':
            return '+3';
        case '9':
        case '10':
        case '11':
        case '12':
            return '+4';
        case '13':
        case '14':
        case '15':
        case '16':
            return '+5';
        case '17':
        case '18':
        case '19':
        case '20':
            return '+6';
        case '21':
        case '22':
        case '23':
        case '24':
        case '25':
            return '+7';
        case '26':
        case '27':
        case '28':
        case '29':
            return '+8';
        case '30':
            return '+9';
        default:
            return '+2';
    }
}

export const getModificadorAtributo = atributo => {
    switch (atributo) {
        case 1:
            return '-5';
        case 2:
        case 3:
            return '-4';
        case 4:
        case 5:
            return '-3';
        case 6:
        case 7:
            return '-2';
        case 8:
        case 9:
            return '-1';
        case 10:
        case 11:
            return '+0';
        case 12:
        case 13:
            return '+1';
        case 14:
        case 15:
            return '+2';
        case 16:
        case 17:
            return '+3';
        case 18:
        case 19:
            return '+4';
        case 20:
        case 21:
            return '+5';
        case 22:
        case 23:
            return '+6';
        case 24:
        case 25:
            return '+7';
        case 26:
        case 27:
            return '+8';
        case 28:
        case 29:
            return '+9';
        case 30:
            return '+10';
    }
}

export const getNameAtributo = atributo => {
    switch (atributo) {
        case 'forca':
            return 'Força';
        case 'destreza':
            return 'Destreza';
        case 'constituicao':
            return 'Constituição';
        case 'inteligencia':
            return 'Inteligência';
        case 'sabedoria':
            return 'Sabedoria';
        case 'carisma':
            return 'Carisma';
    }
}
export const createPerson = (state) => {
    var person = new PersonBean();
    person.name = state.name;
    person.race = state.race;
    person.tendency = state.tendency;
    
    person.antecedent = state.antecedent;
    person.antecedentTraces.personality = state.personalidade;
    person.antecedentTraces.ideals = state.ideais;
    person.antecedentTraces.connections = state.vinculo;
    person.antecedentTraces.defects = state.defeito;
    
    person.class = state.classeArray;
    
    person.attributes.strength = state.forca;
    person.attributes.dexterity = state.destreza;
    person.attributes.constitution = state.constituicao;
    person.attributes.intelligency = state.inteligencia;
    person.attributes.knowledge = state.sabedoria;
    person.attributes.charisma = state.carisma;


    return person;
}