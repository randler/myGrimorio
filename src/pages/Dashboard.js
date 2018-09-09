//import liraries
import React, { Component } from 'react';
import { 
    ScrollView,
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    StyleSheet 
} from 'react-native';
import firebase from 'firebase';

import { connect } from 'react-redux';
import { tryLogout, setPersons } from '../actions';

import CardPersonagem from '../components/CardPersonagem';
import AddPersonagem from '../components/AddPersonagem';

const LOGOUT    = require('../../resources/img/logout.png');
const NOTHING   = require('../../resources/img/nothing.png');

// create a component
class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            personagens: []
        }
    }

    componentWillMount() {
        //console.log('usuario do redux: ',this.props.user.uid);
        this.props.navigation.setParams({logout: this.logout});
        
        
    }
    componentDidMount() {
        this.getPersonsFirebase();
    }
    
    getPersonsFirebase() {
        var persons = firebase.database().ref("persons");
        persons.on('value', (snapshot) => {
            const person = snapshot.val();
            this.setState({personagens: person});
        });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight:(
                <TouchableOpacity
                    onPress={navigation.getParam('logout')} >
                    <Image  
                        style = {{
                            width: 30,
                            height: 24,
                            marginTop: 10,
                            marginRight: 20
                        }} 
                        source = {LOGOUT} />
                    <Text style={{
                        fontSize: 8,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        paddingRight: 20,
                        marginTop: 3, 
                        color: '#FFF' 
                        }}>Sair
                    </Text>
                </TouchableOpacity>
            )
        }
    }

    logout =() => {
        this.props.tryLogout()
            .then(() => {
                this.props.navigation.replace('login');
            })
            .catch( () => {
                Alert.alert('Erro ao tentar sair da conta', 'Tente mais tarde!');
            });
    }

    renderDashboard() {
        if (this.state.personagens.length == 0) {
            return (<View>
                        <Text style={styles.textNothing}>Procurando personagens</Text>
                    </View>);
        } 
        return this.state.personagens.map((personagem, key) => (<CardPersonagem key={key} personagem={personagem} />));
    }

    render() {
        return (
            <View style={[styles.container, this.state.personagens.length == 0 ? styles.containerNothing : null ]}>
                <ScrollView>
                    {this.renderDashboard()}
                </ScrollView>
                <AddPersonagem />
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
    containerNothing: {
        padding: 10,
    },
    textNothing: {
        paddingTop: 20,
        fontSize: 25,
        color: '#d6a200',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

const mapDispatchToProps = {
    tryLogout,
    setPersons
}

const mapStateToProps = state => {
    const { persons } = state;
    return persons;
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
