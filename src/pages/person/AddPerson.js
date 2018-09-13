//import liraries
import React, { Component } from 'react';
import { 
    View,
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
var uuid = require('react-native-uuid');

import { PersonBean } from '../../bean/personBean';

// create a component
class AddPerson extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.addNewPerson()}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addNewPerson() {
        const idUser = this.props.user.uid;
        
        var person = this.createInitialPerson();

        var userData = firebase.database().ref('persons');
        userData.child(idUser).push(person);
    }

    createInitialPerson() {
        var person = new PersonBean();
        person.name = 'Ethan Belmont';
        person.race = 'Asimar';
        person.tendency = 'Caótico/Bom';
        
        person.antecedentTraces.personality = 'Eu sinto uma empatia tremenda por todos que sofrem.';
        person.antecedentTraces.ideals = 'Bem Maior. Meus dons devem ser partilhados com todos, não usados em benefício próprio (Bom) DEVER. Viverei de acordo com o que juro fazer ou morrerei tentando.';
        person.antecedentTraces.connections = 'Meu isolamento me deu grande discernimento sobre um grande mal que apenas eu posso destruir. Um "certo" vampiro jurou vingança contra todos os Belmont depois de ser derrotado por um.';
        person.antecedentTraces.defects = 'Eu gosto de guardar segredos e não os partilho com ninguém. Não costumo fazer amigos com facilidade.'
        
        person.class.push({
            name: 'Patrulheiro',
            level: 7
        });
        person.class.push({
            name: 'Ladino',
            level: 5
        });
        person.class.push({
            name: 'Paladino',
            level: 6
        });
        person.class.push({
            name: 'Feiticeiro',
            level: 1
        });
        return person;
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapStateToProps = state => {
    const { user } = state;
    return user;
}

//make this component available to the app
export default connect(mapStateToProps)(AddPerson);
