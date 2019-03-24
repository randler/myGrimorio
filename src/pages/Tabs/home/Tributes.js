//import liraries
import React, { Component } from 'react';
import { AsyncStorage, Dimensions, View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import TributesContainer from '../../../components/TibutesContainer';

const IMG_PROFICIENCIA = require('../../../../resources/img/bp.png')

// create a component
class Tributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    _retrieveID = async () => {
        try {
            const value = JSON.parse( await AsyncStorage.getItem('@MyGrimorio:idPerson')) || false;
            this.setState({id: value});
        } catch (error) {
            return null;
        }
    }

    async componentWillMount(){
        await this._retrieveID();


    }
    renderTributes() {
         return Object.entries(this.props.persons).map((person, key) => (
            <View key={key} style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={styles.containerProficiencia}>
                        <View style={styles.containerImageProficiencia}>
                            <Image source={IMG_PROFICIENCIA} />
                        </View>
                        <View style={styles.containerTextProficiencia}>
                            <Text style={styles.textProficiencia}>+6</Text>
                        </View> 
                    </View>
                    <View style={styles.containerResistencia}>
                        <Text style={styles.textResistenciaHeader}>Resistência</Text>
                        <Text style={styles.textResistencia}>+6</Text>
                        <Text style={styles.textResistencia}>+6</Text>
                        <Text style={styles.textResistencia}>+6</Text>
                    </View>
                </View>
                <TributesContainer label={"Força"} value={person[1].attributes.strength} />
                <TributesContainer label={"Destreza"} value={person[1].attributes.dexterity} />
                <TributesContainer label={"Constituição"} value={person[1].attributes.constitution} />
                <TributesContainer label={"Inteligência"} value={person[1].attributes.intelligency} />
                <TributesContainer label={"Sabedoria"} value={person[1].attributes.knowledge} />
                <TributesContainer label={"Carisma"} value={person[1].attributes.charisma} />
            </View>));
    }
    render() {
        return (
            <ScrollView >
                { this.renderTributes() }
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    },
    containerHeader: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: 100
    },
    containerProficiencia: {
        width: Dimensions.get('window').width / 1.7,
        justifyContent: 'center',
    },
    containerImageProficiencia: {
    },
    containerTextProficiencia: {
        justifyContent: 'center',
        position: 'absolute',
        height: '100%',
        left: 22,
    },
    containerResistencia: {
        width: Dimensions.get('window').width - (Dimensions.get('window').width / 1.7),
        borderWidth: 1,
        borderColor: 'blue',
        
    },  
    textProficiencia: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    textResistenciaHeader: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textResistencia: {
        borderWidth: 1,
        borderColor: 'red',
        fontSize: 16,
    },
});

const mapStateToProps = state => {
    const { persons } = state;
    return { persons };
}

//make this component available to the app
export default connect(mapStateToProps)(Tributes);
