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
    Dimensions,
    StyleSheet 
} from 'react-native';
import firebase from 'firebase';

import { connect } from 'react-redux';
import { tryLogout, setPersons, getUser } from '../actions';

import CardPersonagem from '../components/CardPersonagem';
import AddPersonagem from '../components/AddPersonagem';

const LOGOUT    = require('../../resources/img/logout.png');
const NOTHING   = require('../../resources/img/nothing.png');

// create a component
class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            idUser: ''
        }

    }

    componentWillMount() {
        this.props.getUser();
        this.props.navigation.setParams({logout: this.logout});
    }
    componentDidMount() {
        this.getPersonsFirebase();
    }
    
    getPersonsFirebase() {
        const idUser = this.props.user.user.uid;
        this.setState({idUser});
        var persons = firebase.database().ref('persons').child('' + idUser);
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
                this._storeData([]);
                this.props.navigation.replace('login');
            })
            .catch( () => {
                Alert.alert('Erro ao tentar sair da conta', 'Tente mais tarde!');
            });
    }

    renderDashboard() {
        if (this.props.persons && this.props.persons.length == 0) {
            return (<View style={{
                                height: Dimensions.get('window').height - 100,
                                justifyContent: 'center',
                                alignItems: 'center', }}>
                        <ActivityIndicator size="large" color = "#d6a200" />
                    </View>);
        } else if(this.props.persons) {
            return this.props.persons.map((personagem, key) => (
                    <TouchableOpacity 
                        key={key}
                        onPress={() => this.props.navigation.navigate('home', {id: personagem.idPerson} )}>
                        <CardPersonagem personagem={personagem} />
                    </TouchableOpacity>
                ));
        } else {
            return (<View style={styles.containerNothing}>
                        <Image source={NOTHING} style={styles.imgNothing} />
                        <Text style={styles.textNothing}>Nenhum personagem cadastrado!</Text>
                    </View>);
        }
    }

    render() {
        return (
            <View style={[styles.container, (this.props.persons && this.props.persons.length == 0) ? styles.containerNothing : null ]}>
                <ScrollView>
                    { this.renderDashboard() }
                </ScrollView>
                <AddPersonagem addPersonagem={() => this.props.navigation.navigate('addPerson') } />
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
        fontSize: 20,
        color: '#d6a200',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    imgNothing: {
        alignSelf: 'center',
        marginTop: 30,
        width: 200,
        height: 186,
    }
});

const mapDispatchToProps = {
    tryLogout,
    setPersons,
    getUser
}

const mapStateToProps = state => {
    return state;
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
