//import liraries
import React from 'react';
import { 
    ScrollView,
    Image,
    View,
    Text,
    StyleSheet 
} from 'react-native';
import CardMagic from '../../../components/CardMagic';

import listOfSpells from '../../../../resources/data/listOfSpells.json';
import magiaTeste from '../../../../resources/data/magiaTeste.json';

const FILTER_ICON = require('../../../../resources/img/filter.png');

// create a component
class Magics extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    { magiaTeste.map( (magic, key) => ( <CardMagic key={key} magic = { magic } /> ))}
                </ScrollView>
                <View style={styles.filterContainer}>
                    <Image source={FILTER_ICON} style={styles.filterIcon} />
                </View>
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
    filterContainer: {
        backgroundColor: '#383838',
        height: 80,
        width: 80,
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#DDD',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    filterIcon:{
        marginTop: 16,
        alignSelf: 'center',
        width: 40,
        height: 40,
        aspectRatio: 1
    }
});

//make this component available to the app
export default Magics;
