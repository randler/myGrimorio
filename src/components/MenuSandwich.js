//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MenuSandwich = () => {
    return (
        <View style={styles.container}>
            <Text>Voltar</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    },
});

//make this component available to the app
export default MenuSandwich;
