//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const LinePersonagem = ({ label, value, min }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textLabel}>{label}: </Text>
            </View>
            <View>
                <Text style={[styles.textValue, min ? styles.textValueMin :null  ]}>{value}</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        elevation: 1,
    },
    textLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    textValue: {
        marginLeft: 5,
        fontSize: 16,
        color: '#6d6d6d'
    },
    textValueMin: {
        fontSize: 11
    }
});

//make this component available to the app
export default LinePersonagem;
