//import liraries
import React from 'react';
import { 
    View,
    AsyncStorage,
    KeyboardAvoidingView,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Text,
    TextInput
} from 'react-native';

import { connect } from 'react-redux';

import CardForm from '../components/cards/CardForm';
import CardFormFooter from '../components/cards/CardFormFooter';
import FormRow from '../components/forms/FormRow';

import { tryLogin, userLoginSuccess  } from '../actions';

const bookBackground = require('../../resources/img/book.jpg');
const LOGO = require('../../resources/img/5ered.png');

// create a component
class Login extends React.Component {
    static navigationOptions = {
        headerRight:(
            <Image  
                style = {{
                    width: 30,
                    height: 30,
                    marginRight: 20,
                    aspectRatio: 1 }} 
                source = {LOGO} 
        />)
    }

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }

    }

    componentWillMount() {
        this._retrieveData();
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    _storeData = async (user) => {
        try {
            await AsyncStorage.setItem('@MyGrimorio:login', JSON.stringify(user));
        } catch(error) {
            console.log('error: not was possible persist the user data in phone')
        }
    }
    _retrieveData = async () => {
        try {
            const value = JSON.parse( await AsyncStorage.getItem('@MyGrimorio:login')) || false;
            const expiration = value.user.stsTokenManager.expirationTime;
            
            if (value && (Date.now() < expiration)) {
                this.props.userLoginSuccess(value);
                return this.props.navigation.replace('dashboard');
                //this.logar(value[0].email, value[0].password);
            }
        } catch (error) {
            return null;
        }
    }

    logar(email = '', password = '') {
        
        this.setState({isLoading: true, message: ''});
        if (email === '' && password === '') { 
            email = this.state.mail;
            password = this.state.password;
        }
            
        
        this.props.tryLogin({email, password})
            .then((user) => {
                if (user){
                    user.password = password;
                    this._storeData(user);                    
                    return this.props.navigation.replace('dashboard');
                }

                this.setState({
                    isLoading: false,
                    message: ''
                });
            })
            .catch( error => {
                this.setState({
                    isLoading: false,
                    message: this.getMessageByErrorCode(error)
                });
            });
    }

    getMessageByErrorCode(errorCode) {
        switch(errorCode) {
            case 'auth/invalid-email':
                return 'E-mail inválido';
            case 'auth/user-disabled':
                return 'Usuário não permitido';
            case 'auth/wrong-password':
                return 'Senha e/ou Email incorreto(s)';
            case 'auth/network-request-failed':
                return 'Não consigo conectar :(';
            default:
                return errorCode;
        }
    }

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator color = "#FFF" style = { styles.buttonLogin } />
        return (
            <TouchableOpacity
                style = {styles.buttonLogin}
                onPress = { () => this.logar()}
                underlayColor = '#a37c00'>
                <Text style = {styles.buttonLoginText}>Entrar</Text>
            </TouchableOpacity>
        )
    }

    renderMessage() {
        const { message } = this.state;

        if(!message)
            return null;

        return (
            <View style={styles.errorDiv}>
                <Text style={styles.errorText}>{ message }</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
            <Image 
                style={styles.imageBook}
                source={ bookBackground } />
                <View style = {styles.cardLogin}>
                    <CardForm imagem = 'login' >
                        <FormRow first >
                            <TextInput
                                style = {styles.textInput}
                                placeholder = "user@mail.com"
                                value = {this.state.mail}
                                onChangeText = { value => this.onChangeHandler('mail', value)} />
                        </FormRow>
                        <FormRow last >
                            <TextInput
                                style = {styles.textInput}
                                placeholder = "********"
                                value = {this.state.password}
                                secureTextEntry
                                onChangeText = { value => this.onChangeHandler('password', value)} 
                            />
                        </FormRow>
                        { this.renderMessage() }
                        { this.renderButton() }
                    </CardForm>
                    <CardFormFooter toScreen = {() => this.props.navigation.navigate('register')} >
                        <Text style = {styles.textFooter}>Cadastre-se</Text>
                    </CardFormFooter>
                </View>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    },
    textInput: {
        padding: 5,
        paddingLeft: 15,
        color: '#FFF'
    },
    imageBook: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    cardLogin: {
        marginTop: 80,
    },
    buttonLogin: {
        backgroundColor: '#D6A200',
        borderWidth: 1,
        borderColor: '#5B4500',
        marginHorizontal: 50,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
    },
    buttonLoginText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    },
    textFooter: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D6A200',
        alignSelf: 'center',
    },
    errorDiv: {
        marginVertical: 5,
    },
    errorText: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

const mapDispatchToProps = {
    tryLogin,
    userLoginSuccess,
    
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(Login);
