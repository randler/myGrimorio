//import liraries
import React from 'react';
import { Alert } from 'react-native';
import { 
    ContainerLogin, 
    ImageBackground, 
    CardLogin, 
    InputLogin, 
    TextFooterLogin, 
    LoadingButton,
    ButtonLogin,
    ContainerError,
    ButtonLoginText,
    ImageHeader,
    ErrorText,
    ContainerApp
} from './styles';

import { connect } from 'react-redux';

import CardForm from '../../components/cards/CardForm';
import CardFormFooter from '../../components/cards/CardFormFooter';
import FormRow from '../../components/forms/FormRow';

import { tryLogin, userLoginSuccess  } from '../../actions';

const BOOK_BACKGROUND = require('../../../resources/img/book.jpg');
const LOGO = require('../../../resources/img/5ered.png');

// create a component
class Login extends React.Component {
    static navigationOptions = {
        headerRight:( <ImageHeader  source = {LOGO} /> )
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
            
            if (value) {
                if(Date.now() > expiration) {
                    this.logar(value.user.email, value.password)
                } else {
                    this.setState({
                        mail: value.user.email,
                        password: value.password
                    });
                    this.props.userLoginSuccess(value);
                    return this.props.navigation.navigate('Dashboard');
                }
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
                    return this.props.navigation.navigate('Dashboard');
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
                return Alert.alert('Falha na conexão', 'Não consigo acessar a internet. Verifique a sua conexão e tente novamente.');
            default:
                return errorCode;
        }
    }

    renderButton() {
        if (this.state.isLoading)
            return <LoadingButton color = "#FFF" />
        return (
            <ButtonLogin
                onPress = { () => this.logar()}
                underlayColor = '#a37c00'>
                <ButtonLoginText>Entrar</ButtonLoginText>
            </ButtonLogin>
        )
    }

    renderMessage() {
        const { message } = this.state;

        if(!message)
            return null;

        return (
            <ContainerError>
                <ErrorText>{ message }</ErrorText>
            </ContainerError>
        );
    }

    render() {
        return (
            <ContainerApp>
            <ImageBackground source={ BOOK_BACKGROUND } />
                <CardLogin>
                    <CardForm imagem = 'login' >
                        <FormRow first >
                            <InputLogin
                                placeholder = "user@mail.com"
                                value = {this.state.mail}
                                onChangeText = { value => this.onChangeHandler('mail', value)} />
                        </FormRow>
                        <FormRow last >
                            <InputLogin
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
                        <TextFooterLogin>Cadastre-se</TextFooterLogin>
                    </CardFormFooter>
                </CardLogin>
            </ContainerApp>
        );
    }
};

const mapDispatchToProps = {
    tryLogin,
    userLoginSuccess,   
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(Login);
