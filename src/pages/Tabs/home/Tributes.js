//import liraries
import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import TributesContainer from '../../../components/TibutesContainer';


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
});

const mapStateToProps = state => {
    const { persons } = state;
    return { persons };
}

//make this component available to the app
export default connect(mapStateToProps)(Tributes);
