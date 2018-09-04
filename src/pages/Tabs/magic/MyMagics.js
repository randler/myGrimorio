//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MyMagics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyMagics</Text>
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
export default MyMagics;
