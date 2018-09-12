//import liraries
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PLUS_ICON = require('../../resources/img/plus.png')

// create a component
const AddPersonagem = ({addPersonagem}) => {
    return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={addPersonagem}>
                    <Image source={PLUS_ICON} style={styles.plusIcon} />
                </TouchableOpacity>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#DDD',
        bottom: 10,
        right: 10,
        backgroundColor: '#383838',
    },
    plusIcon: {
        marginTop: 20,
        alignSelf: 'center',
        width: 30,
        height: 30,
        aspectRatio: 1
    }
});

//make this component available to the app
export default AddPersonagem;
