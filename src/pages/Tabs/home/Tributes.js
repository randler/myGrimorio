//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Tributes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tributes</Text>
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
export default Tributes;
