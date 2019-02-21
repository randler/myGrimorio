//import liraries
import React from 'react';
import { 
    View,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Text,
    TextInput
} from 'react-native';

import CardForm from '../components/cards/CardForm';
import FormRow from '../components/forms/FormRow';

import { connect } from 'react-redux';
import { tryRegister } from '../actions';

const bookBackground = require('../../resources/img/book.jpg');

// create a component
class Login extends React.Component {
    static navigationOptions = {
        headerRight: (
            <Image  
                style = {{
                    width: 30,
                    height: 30,
                    marginRight: 20,
                    aspectRatio: 1 }} 
                source = {require('../../resources/img/5ered.png')} />
        ),
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
            return <ActivityIndicator color = "#FFF" style = { styles.buttonLogin } />
        return (
            <TouchableOpacity
                style = {styles.buttonLogin}
                onPress = { () => this.tryRegister() }
                underlayColor = '#a37c00'>
                <Text style = {styles.buttonLoginText}>Cadastrar</Text>
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
                    <CardForm imagem = 'register' >
                        <FormRow >
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
    tryRegister
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(Login);
