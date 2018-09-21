//import liraries
import React, { Component } from 'react';
import { 
    View,
    Dimensions,
    Picker,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import { VALUES_TRIBUTE } from '../../../resources/data/js/utils';
import periciasPorHabilidade  from '../../../resources/data/js/periciasPorHabilidade';

function getPickerItem(item) {
    return item.map((value, index) => <Picker.Item 
                                        label={value} 
                                        key={index} 
                                        value={value} 
                                    />);
}

function getModificador(value) {
    const valorAtributo = value + '';
    switch (valorAtributo + '') {
        case '1':
            return '-5';    
        case '2':
        case '3':
            return '-4';    
        case '4':
        case '5':
            return '-3';    
        case '6':
        case '7':
            return '-2';    
        case '8':
        case '9':
            return '-1';    
        case '10':
        case '11':
            return '+0';    
        case '12':
        case '13':
            return '+1';    
        case '14':
        case '15':
            return '+2';    
        case '16':
        case '17':
            return '+3';    
        case '18':
        case '19':
            return '+4';    
        case '20':
        case '21':
            return '+5';    
        case '22':
        case '23':
            return '+6';    
        case '24':
        case '25':
            return '+7';    
        case '26':
        case '27':
            return '+8';    
        case '28':
        case '29':
            return '+9';    
        case '30':
            return '+10';
        default: 
            return '-5';
    }
}
function getPericias(habilidade) {
    return Object.entries(periciasPorHabilidade).map(pericias =>{
        if(pericias[0] === habilidade) {
            return pericias[1].map(pericia => (
                <View key={pericia} style={styles.row}>
                        <Text style={styles.txtContainer}>{pericia}: </Text>
                        <Text style={styles.txtValuePericia} > -5 </Text>
                </View>
            ))
        }
    });
}

// create a component
const CardAbility = ({title, label, value, onChangeHandler}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtContainer}>{title}</Text>
            <View style={styles.row}>
                <Picker
                    style={styles.picker}
                    value={value}
                    mode={'dropdown'}
                    selectedValue={value}
                    onValueChange={ (itemValue) => onChangeHandler(label, itemValue) }>
                        {getPickerItem(VALUES_TRIBUTE)}
                </Picker>
                <Text style={styles.modificador}>{getModificador(value)}</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width / 2) - 10,
        borderWidth: 0.5,
        borderRadius: 3,
        elevation: 1,
        borderColor: '#DDD',
    },
    row: {
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    txtContainer: {
        marginLeft: 10,
        marginTop: 5,
        color: '#CCC',
    },
    picker: {
        width: 100
    },
    imgAbility: {
        height: 90,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    modificador: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#383838'
    }
});

//make this component available to the app
export default CardAbility;
