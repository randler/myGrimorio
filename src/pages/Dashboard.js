//import liraries
import React, { Component } from 'react';
import { 
    ScrollView,
    RefreshControl,
    ActivityIndicator,
    AsyncStorage,
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

import CardPersonagem from '../components/cards/CardPersonagem';
import AddPersonagem from '../components/AddPersonagem';

const LOGOUT    = require('../../resources/img/logout.png');
const NOTHING   = require('../../resources/img/nothing.png');

// create a component
class Dashboard extends Component {

    constructor(props) {
        super(props);

        console.ignoredYellowBox = [
            'Setting a timer'
        ];

        this.state = {
            idUser: '',
            dataStorage: true,
            refreshing: false,
        }

    }

    componentWillMount() {
        this.props.navigation.setParams({logout: this.logout});
        this.getPersonsFireBase();
    }

    _storeData = async (data, store) => {
        try {
            await AsyncStorage.setItem(store, JSON.stringify(data));
        } catch(error) {
            console.log('error: not was possible persist the user data in phone')
        }
    }
    _removeData = async (store) => {
        try {
            await AsyncStorage.removeItem(store);
        } catch(error) {
            console.log('error: not was possible persist the user data in phone')
        }
    }

    getPersonsFireBase() {
        const idUser = this.props.user.user.uid;
    
        var persons = firebase.database()
                                .ref('persons')
                                .child('' + idUser);
        
        persons.once('value', (snapshot) => {
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
                this._removeData('@MyGrimorio:login');
                this.props.navigation.replace('login');
            })
            .catch( () => {
                Alert.alert('Erro ao tentar sair da conta', 'Tente mais tarde!');
            });
    }

    navigateToPerson(id) {
        this._storeData(id, '@MyGrimorio:idPerson');
        this.props.navigation.replace('home');
    }

    renderDashboard() {
        if (this.props.persons && Object.entries(this.props.persons).length == 0) {
            return (<View style={{
                                height: Dimensions.get('window').height - 100,
                                justifyContent: 'center',
                                alignItems: 'center', }}>
                        <ActivityIndicator size="large" color = "#D6A200" />
                    </View>);
        } else if(this.props.persons) {
            return Object.entries(this.props.persons).map((personagem, key) => (
                    <TouchableOpacity 
                        key={key}
                        onPress={() => this.navigateToPerson(personagem[0])}>
                        <CardPersonagem personagem={personagem[1]} />
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
            <View style={[styles.container, (this.props.persons && Object.entries(this.props.persons).length == 0) ? styles.containerNothing : null ]}>
                <ScrollView
                    refreshControl={
                        <RefreshControl 
                            colors={[
                                '#5B4500',
                                '#967101',
                                '#bf9003',
                                '#D6A200',
                                '#eab100',
                                '#383838']}
                            tintColor={'#D6A200'} 
                            refreshing={this.state.refreshing}  
                            onRefresh={() => this.getPersonsFireBase()} 
                        />
                    }>
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
