//import liraries
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// create a component
class Magics extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Magics</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

//make this component available to the app
export default Magics;
