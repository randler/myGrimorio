import React, { Component } from 'react'
import { 
    Text, 
    Dimensions,
    View, 
    Image,
    StyleSheet 
} from 'react-native'

import { getModificadorAtributo } from '../../resources/data/js/utils';

const TRIBUTE = require('../../resources/img/tribute.png')

const TibutesContainer = ({value, label, last}) => {
    return (
      <View style={styles.containerTribute}>
        <View style={styles.containerImage}>
            <Image source={TRIBUTE} style={styles.tribute} />
            <View style={ styles.labelContainer}>
                <Text style={ styles.labelTxt}>{ label }</Text>
            </View>
            <View style={ styles.valueContainer}>
                <Text style={ styles.valueTxt}>{ value }</Text>
            </View>
            <View style={ styles.modifyContainer}>
                <Text style={ styles.modifyTxt}>{ getModificadorAtributo(value) }</Text>
            </View>
        </View>
        <View>
            <Text>Atletismo: </Text>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
    containerTribute: {
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
    },
    containerImage: {
        width: Dimensions.get('window').width / 3,
        alignContent: 'center',
    },
    tribute: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    valueContainer: {
        width: Dimensions.get('window').width / 3,
        padding: 5,
        position: 'absolute',
        top: 30,
    },
    valueTxt: {
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    labelContainer: {
        width: Dimensions.get('window').width / 3,
        padding: 5,
        position: 'absolute',
        top: 3,
    },
    labelTxt: {
        alignSelf: 'center',
        fontSize: 13,
        fontWeight: 'bold',
    },
    modifyContainer: {
        width: Dimensions.get('window').width / 3,
        padding: 5,
        position: 'absolute',
        bottom: 8,
    },
    modifyTxt: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    last: {
        marginBottom: 10,
    }
})

export default TibutesContainer;