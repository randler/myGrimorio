//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const LineDescPerson = ({label, value, last}) => {
    return (
        <View style={[styles.container, last ? styles.desctTextLast : null]}>
                <Text style={styles.label}>{ label }: </Text>
                <Text style={styles.value}>{ value }</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    value: {
        fontSize: 14
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    desctTextLast: {
        marginBottom: 10,
    },
});

//make this component available to the app
export default LineDescPerson;
