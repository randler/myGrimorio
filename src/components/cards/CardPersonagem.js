//import liraries
import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { Icon } from 'react-native-elements'

import LinePersonagem from '../lines/LinePersonagem';

const getLevel = (arrayClass) => {
    let nivel = 0;
    arrayClass?.forEach(element => {
        nivel += element.level;
    });
    return nivel;
}

const getClassName = (arrayClass) => {
    let classe = '';
    arrayClass?.forEach(element => {
        classe += element.name + '-' + element.level + '/'
    });
    return classe;
}
// create a component
const CardPersonagem = ({personagem}) => {
    return (
        <View style={styles.container}>
            <View>
                <LinePersonagem label='Nome' value={personagem.name ? personagem.name : '' }  />
                <LinePersonagem label='Classe' min={personagem.class && personagem.class.length > 3 ? true : false} value={personagem.class ? getClassName(personagem.class) : '' }  />
                <LinePersonagem label='Nível' value={personagem.class && personagem.class ? getLevel(personagem.class) : ''}  />
                <LinePersonagem label='Raça' value={ personagem.race ? personagem.race : '' }  />
                <LinePersonagem label='Tendência' value={personagem.tendency ? personagem.tendency: ''}  />
            </View>
            <View style={styles.menuPerson}>
                <Menu>
                <MenuTrigger style={styles.menuIcon} >
                    <Icon name='menu' color='#D6A200' />
                </MenuTrigger>
                <MenuOptions style={styles.optionsMenu}>
                    <MenuOption onSelect={() => alert(`Editar`)} >
                        <Text style={styles.btnMenu}>Editar</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Remover`)} >
                        <Text style={[styles.btnMenu, styles.btnRemover]}>Remover</Text>
                    </MenuOption>
                </MenuOptions>
                </Menu>  
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        elevation: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 5,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
    menuPerson: {
        position: 'absolute',
        top: 5,
        right: 5,
        alignSelf: 'center',
    },
    menuIcon: {
        padding: 10
    },
    optionsMenu: {
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#383838',
    },
    btnMenu: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnRemover: {
        color: '#FF0000'
    }
});

//make this component available to the app
export default CardPersonagem;
