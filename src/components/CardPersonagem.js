//import liraries
import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import LinePersonagem from './LinePersonagem';

const getLevel = (arrayClass) => {
    let nivel = 0;
    arrayClass.forEach(element => {
        nivel += element.level;
    });
    return nivel;
}

const getClassName = (arrayClass) => {
    let classe = '';
    arrayClass.forEach(element => {
        classe += element.name + '-' + element.level + '/'
    });
    return classe;
}
// create a component
const CardPersonagem = ({personagem}) => {
    return (
        <View style={styles.container}>
            <LinePersonagem label='Nome' value={personagem.name ? personagem.name : '' }  />
            <LinePersonagem label='Classe' min={personagem.class.length > 3 ? true : false} value={personagem.class ? getClassName(personagem.class) : '' }  />
            <LinePersonagem label='Nível' value={personagem.class ? getLevel(personagem.class) : ''}  />
            <LinePersonagem label='Raça' value={ personagem.race ? personagem.race : '' }  />
            <LinePersonagem label='Tendência' value={personagem.tendency ? personagem.tendency: ''}  />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 5,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
});

//make this component available to the app
export default CardPersonagem;
