//import liraries
import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions 
} from 'react-native';

const TRACE = require('../../resources/img/traces.png');

// create a component
const Traces = ({label, value, last}) => {
    return (
        <View style={[styles.containerTraces, last ? styles.last : null ]} >
            <Image source={TRACE} style={styles.traces} />
            <View style={ styles.valueContainer}>
                <Text style={ styles.valueTxt}>{ value }</Text>
            </View>
            <View style={ styles.labelContainer}>
                <Text style={ styles.labelTxt}>{ label }</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerTraces: {
        width: Dimensions.get('screen').width - 15,
    },
    traces: {
        width: Dimensions.get('window').width - 10,
        height: (Dimensions.get('window').width - 10) / 2.44,
    },
    valueContainer: {
        margin: 5,
        padding: 5,
        position: 'absolute',
        top: 5,
        width: Dimensions.get('window').width - 20,
    },
    valueTxt: {
        alignSelf: 'center',
        fontSize: 15,
    },
    labelContainer: {
        margin: 5,
        padding: 5,
        position: 'absolute',
        bottom: 3,
        width: Dimensions.get('window').width - 20,
    },
    labelTxt: {
        alignSelf: 'center',
        fontSize: 13,
        fontWeight: 'bold',
    },
    last: {
        marginBottom: 10,
    }
});

//make this component available to the app
export default Traces;
