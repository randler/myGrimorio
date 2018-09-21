//import liraries
import React from 'react';
import { Text, StyleSheet, Dimensions, Picker } from 'react-native';

import FormRow from '../forms/FormRow';

const getPickerItem = (item, antecedente) => {
    if(antecedente) {
        return Object.entries(item)
                        .map((value) => <Picker.Item 
                                label={value[1]} 
                                key={value[0]} 
                                value={value[1]} 
                            />);
    }
    return item.map((value, index) => <Picker.Item 
                                        label={value} 
                                        key={index} 
                                        value={value} 
                                    />);
}

// create a component
const LinePickerAddPerson = ({ 
        title, 
        label,  
        value, 
        onChangeHandler, 
        item, 
        antecedente = false, 
        dropdown = true,
        styleCustom = false }) => {
    return (
        <FormRow >
        <Text style={styles.txtLabel}>{ title }</Text>
            <Picker
                style={[styles.picker, styleCustom ? styleCustom : styles.pickerRow]}
                value={ value }
                mode={dropdown ? 'dropdown' : 'dialog'}
                selectedValue={ value }
                onValueChange={ (itemValue) => onChangeHandler(label, itemValue) }>
                    {getPickerItem(item, antecedente)}
            </Picker>
        </FormRow>
    );
};

// define your styles
const styles = StyleSheet.create({
    pickerRow: {
        width: (Dimensions.get('window').width / 2) - 20,
    },
    pickerRowMore: {
        width: (Dimensions.get('window').width / 1.4) - 20
    },
    pickerRowMin: {
        width: (Dimensions.get('window').width * 0.2) - 20
    },
    pickerTrace: {
        width: Dimensions.get('window').width - 10,
    },
    picker: {
        paddingHorizontal: 5,
        flex: 1
    },
    txtLabel: {
        color: '#CCC',
        fontWeight: 'bold',
    },
});

//make this component available to the app
export default LinePickerAddPerson;
