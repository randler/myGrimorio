//import liraries
import React from 'react';

import CardForm from '../../components/cards/CardForm';
import FormRow from '../../components/forms/FormRow';

import { connect } from 'react-redux';
import { tryRegister } from '../../actions';
import { 
    ImageHeader, 
    ImageBackground, 
    CardLogin, 
    InputLogin, 
    ContainerLogin, 
    ContainerError, 
    LoadingButton, 
    ButtonLogin, 
    ButtonLoginText, 
    ErrorText,
    ContainerApp
} from './styles';

const bookBackground = require('../../../resources/img/book.jpg');

// create a component
class Login extends React.Component {
    static navigationOptions = {
        headerRight: ( <ImageHeader source = {require('../../../resources/img/5ered.png')} /> ),
    }
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }

    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }
    tryRegister() {
        this.setState({isLoading: true, message: ''});
        const { mail: email, password } = this.state;

        if(!email || !password) {
            this.setState({
                message: 'Digite os dados',
                isLoading: false
            });
        } else {
            
            this.props.tryRegister({email, password})
            .then((user) => {
                if (user)
                  return this.props.navigation.replace('home');  

                this.setState({
                    isLoading: false,
                    message: ''
                });
            })
            .catch( error =>{
                this.setState({
                    isLoading: false, 
                    message: this.getMessageByErrorCode(error)
                });
            });
        }
    }

    getMessageByErrorCode(errorCode) {
        switch(errorCode) {
            case 'auth/email-already-in-use':
                return 'E-mail já está em uso';
            case 'auth/invalid-email':
                return 'E-mail inválido';
            case 'auth/operation-not-allowed':
                return 'Operação não permitida';
            case 'auth/weak-password':
                return 'Senha fraca';
            default:
                return errorCode;
        }
    }

    renderButton() {
        if (this.state.isLoading)
            return <LoadingButton color = "#FFF" />
        return (
            <ButtonLogin
                onPress = { () => this.tryRegister() }
                underlayColor = '#a37c00'>
                <ButtonLoginText>Cadastrar</ButtonLoginText>
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
            <ImageBackground source={ bookBackground } />
                <CardLogin>
                    <CardForm imagem = 'register' >
                        <FormRow >
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
                </CardLogin>
            </ContainerApp>
        );
    }
};

const mapDispatchToProps = {
    tryRegister
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(Login);
