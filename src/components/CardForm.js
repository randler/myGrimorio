//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';

// create a component
const CardForm = props => {
    const { children } = props;
    return (
        <View style={styles.container}>
            { children }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#383838',
    },
});

//make this component available to the app
export default CardForm;
