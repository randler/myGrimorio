//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const LineMagic = props => {
    const  {label, value} = props;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>{ label }</Text>
            </View>
            <View>
                <Text style={styles.value}>{ value }</Text>
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

    },
    value: {
        marginLeft: 5,
        fontWeight: 'bold',
    }
});

//make this component available to the app
export default LineMagic;
