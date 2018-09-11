//import liraries
import React, { Component } from 'react';
import { 
    ScrollView,
    ActivityIndicator,
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

    }

    componentWillMount() {
        //console.log('usuario do redux: ',this.props.user.uid);
        this.props.navigation.setParams({logout: this.logout});
        this.getPersonsFirebase();
    }
    componentDidMount() {
    }
    
    getPersonsFirebase() {
        var persons = firebase.database().ref("persons");
        persons.on('value', (snapshot) => {
            const person = snapshot.val();
            this.props.setPersons(person);
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
        if (this.props.persons && this.props.persons.length == 0) {
            return (<View>
                        <ActivityIndicator color = "#d6a200" />
                    </View>);
        } else if(this.props.persons) {
            return this.props.persons.map((personagem, key) => (
                    <TouchableOpacity 
                        key={key}
                        onPress={() => this.props.navigation.navigate('home', {id: personagem.idPerson} )}>
                        <CardPersonagem personagem={personagem} />
                    </TouchableOpacity>
                ));
        }
    }

    render() {
        return (
            <View style={[styles.container, (this.props.persons && this.props.persons.length == 0) ? styles.containerNothing : null ]}>
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
        backgroundColor: '#DDD',
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
    return {persons};
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
