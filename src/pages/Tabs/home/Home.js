//import liraries
import React from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { firebase } from 'firebase';
import { AsyncStorage } from '@react-native-async-storage/async-storage'

import LineDescPerson from '../../../components/lines/LineDescPerson';
import Traces from '../../../components/Traces';

import { getPerson } from '../../../actions';

const PICTURE   = require('../../../../resources/img/picture_standard.png');

// create a component
class Home extends React.Component {

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

    async componentDidMount() {
        await this._retrieveID();
        this.props.getPerson(this.state.id);
        
        /*firebase.database().ref("persons")
            .on('value', (snapshot) => {
                const persons = snapshot.val();
                this.props.setPersons(persons);
        });*/
    }

    getClassName = (arrayClass) => {
        let classe = '';
        arrayClass?.forEach(element => {
            classe += element.name + '-' + element.level + '/'
        });
        return classe;
    }

    renderPersonData() {
        console.log(this.props.persons);
        return Object.entries(this.props.persons).map((person, key) => (
                <View style={styles.container} key={key}>
                    <View style={styles.containerHeader}>
                        <View style={styles.containerDesc}>
                                <Text style={styles.name}>{person[1].name}</Text>
                                <LineDescPerson label='Classe' value={this.getClassName(person[1]?.class)} />
                                <LineDescPerson label='Raça' value={person[1].race} />
                                <LineDescPerson label='Tendência' value={person[1].tendency} />
                                <LineDescPerson label='Antecedente' value={person[1].antecedent} />
                                <LineDescPerson label='XP' value={person[1].xp} last />
                        
                            </View>  
                            <View style={styles.containerImage}>
                                <Image source={PICTURE} style={styles.image} />
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.replace('dashboard')}>
                                    <Text style={styles.btnChangePerson}>Trocar Personagem</Text>
                                </TouchableOpacity>
                            </View>  
                    </View>
                    <Traces label='Traços de Personsalidade' value={person[1]?.antecedentTraces.personality} />
                    <Traces label='Ideais' value={person[1]?.antecedentTraces.ideals} />
                    <Traces label='Ligações' value={person[1]?.antecedentTraces.connections} />
                    <Traces last label='Defeitos' value={person[1]?.antecedentTraces.defects} />
                </View>
            ))
    }

    render() {
        return (
            <ScrollView >
            { this.renderPersonData() }
            </ScrollView>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#DDD',
    },
    containerHeader: {
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#DDD',
    },
    containerDesc: {
        flex: 1,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    containerImage: {
        padding: 3,
    },
    image: {
        width: 150,
        height: 150,
        aspectRatio: 1
    },
    btnChangePerson: {
        alignSelf: 'center',
        borderRadius: 3,
        padding: 5,
        margin: 3,
        backgroundColor: '#D6A200',
        color: '#FFF'
    }
});

const mapDispatchToProps = {
    getPerson
}

const mapStateToProps = state => {
    const { persons } = state;
    return { persons };
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Home);
