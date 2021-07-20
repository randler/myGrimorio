//import liraries
import React from 'react';
import { 
    View, 
    StyleSheet,
    Image
} from 'react-native';

const login = require('../../../resources/img/book_icon.png');
const register = require('../../../resources/img/register.png');

// create a component
const CardForm = props => {
    const { children, imagem } = props;
    return (
        <View> 
            <View style = {styles.containerImage}>
                <Image
                    style = {styles.image} 
                    source = {imagem === 'login' ? login : register} />
            </View>
            <View style = {styles.container}>
                { children }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: -50,
        padding: 20,
        paddingTop: 50,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderWidth: 1,
        borderColor: '#a37c00',
        backgroundColor: '#383838',
        zIndex: 1
    },
    containerImage: {
        elevation: 1,
        zIndex: 2
    },
    image: {
        borderWidth: 1,
        borderColor: '#a37c00',
        borderRadius: 50,
        width: 100,
        height: 100,
        zIndex: 2,
        alignSelf: 'center',
    }
});

//make this component available to the app
export default CardForm;
