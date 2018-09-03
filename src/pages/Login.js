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

import CardForm from '../components/CardForm';
import CardFormFooter from '../components/CardFormFooter';
import FormRow from '../components/FormRow';

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

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator color = "#a37c00" style = { styles.buttonLogin } />
        return (
            <TouchableOpacity
                style = {styles.buttonLogin}
                onPress = { () => console.log("Clicou para login") }
                underlayColor = '#a37c00'>
                <Text style = {styles.buttonLoginText}>Entrar</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
            <Image 
                style={styles.imageBook}
                source={ bookBackground } />
                <View style = {styles.cardLogin}>
                    <CardForm imagem = 'login' >
                        <FormRow >
                            <TextInput
                                style = {styles.textInput}
                                placeholder = "user@mail.com"
                                value = {this.state.mail}
                                onChangeText = { value => this.onChangeHandler('mail', value)} />
                        </FormRow>
                        <FormRow >
                            <TextInput
                                style = {styles.textInput}
                                placeholder = "********"
                                value = {this.state.password}
                                secureTextEntry
                                onChangeText = { value => this.onChangeHandler('password', value)} 
                            />
                        </FormRow>
                        { this.renderButton() }
                    </CardForm>
                    <CardFormFooter>
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
    }
});

//make this component available to the app
export default Login;
