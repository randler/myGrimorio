//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Weapons extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Weapons</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    },
});

//make this component available to the app
export default Weapons;
