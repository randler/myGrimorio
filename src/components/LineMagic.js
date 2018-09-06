//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const LineMagic = props => {
    const  {label, value, textHeader, last} = props;
    return (
        <View style={[styles.container, last ? {marginBottom: 10} : null]}>
            <View>
                <Text style={[styles.label, textHeader ? styles.textHeader: null]}>{ label }</Text>
            </View>
            <View>
                <Text style={[styles.value, textHeader ? styles.textHeader: null]}>{ value }</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        marginLeft: 5,
    },
    textHeader: {
        fontSize: 16,
        color: '#878787'
    }
});

//make this component available to the app
export default LineMagic;
