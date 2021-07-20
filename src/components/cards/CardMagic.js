//import liraries
import React from 'react';
import { 
    Alert,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Modal
} from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { Icon } from 'react-native-elements'

import { connect } from 'react-redux';

import { saveMyMagic } from '../../actions';

import LineMagic from '../lines/LineMagic';
import ModalMagic from '../ModalMagic';


// create a component
class CardMagic extends React.Component {
    
    constructor(props) {
        super(props);

        this.state ={
            modalVisible: false
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    saveMyMagic(magic) {
        Alert.alert(
            'Salvar Magia', 
            `Deseja adicionar "${magic.name}" a sua lista de magias?`,
            [
                {text: 'Cancelar', onPress: () => console.log('Cancelar')},
                {text: 'Sim', onPress: () => this.props.saveMyMagic(magic, this.props.persons)}
            ],
            { cancelable: false }
        );
    }

    render() {
        const { 
            name, 
            castingTime, 
            range,
            components,
            duration,
            school,
        } = this.props.magic;

        return (
            <View>
                <TouchableOpacity 
                    onPress={() => this.setState({modalVisible: true})}
                    onLongPress={() => this.props.myMagic ? {} : this.saveMyMagic(this.props.magic)}
                    style={[
                        styles.container,
                        this.props.myMagic ? styles.myMagicHeigth : null , 
                        (this.props.first || this.props.last ) ? styles.firstOrLast : null 
                    ]}>
                    <View style={styles.containerDesc}>
                        <Text style={styles.name}>{name}</Text>
                        <LineMagic
                            label="Escola:"
                            value={school.pt} />
                        <LineMagic
                            label="Tempo de conjuração:"
                            value={castingTime} />
                        <LineMagic 
                            label="Alcance:"
                            value={range} />
                        <LineMagic 
                            label="Componentes:"
                            value={components} />
                        <LineMagic 
                            label="Duração:"
                            value={duration} />
                        { this.props.myMagic ? null 
                                    : <TouchableHighlight
                                        style={styles.addMyMagic}
                                        onPress={() => this.props.saveMyMagic(this.props.magic, this.props.persons)} >
                                        <Text style={styles.txtMyMagic}> Adicionar a minha lista </Text>
                                    </TouchableHighlight>}
                    </View>
                    { this.props.myMagic ? 
                        <View style={styles.menuPerson}>
                            <Menu>
                            <MenuTrigger style={styles.menuIcon} >
                                <Icon name='menu' color='#D6A200' />
                            </MenuTrigger>
                            <MenuOptions style={styles.optionsMenu}>
                                <MenuOption onSelect={() => this.props.deleteMagic(this.props.magic)} >
                                    <Text style={[styles.btnMenu, styles.btnRemover]}>Remover</Text>
                                </MenuOption>
                            </MenuOptions>
                            </Menu>  
                        </View>
                    : null}
                </TouchableOpacity>
                <Modal
                    animationType='slide'
                    transparent={true}
                    presentationStyle="overFullScreen"
                    visible={this.state.modalVisible}
                    onRequestClose={()=> this.setModalVisible(!this.state.modalVisible)}>
                        <ModalMagic 
                            setVisible={()=> {this.setModalVisible(!this.state.modalVisible)}} 
                            magic={this.props.magic} />
                </Modal>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 160,
        marginHorizontal: 10,
        marginVertical: 2.5,
        padding: 5,
        borderRadius: 5,
        elevation: 1,
        backgroundColor: '#FFF',
        flex: 1,
    },
    containerDesc: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
    },
    menu: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    myMagicHeigth: {
        height: 120,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtMyMagic: {
        color: '#FFF',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    addMyMagic: {
        paddingHorizontal:5,
        paddingVertical: 10,
        marginHorizontal: 1,
        marginVertical: 3,
        backgroundColor: '#383838',
        borderRadius: 3
    },
    firstOrLast: {
        marginTop: 5,
    },
    menuPerson: {
        position: 'absolute',
        top: 5,
        right: 5,
        alignSelf: 'center',
    },
    optionsMenu: {
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#383838',
    },
    menuIcon: {
        padding: 10
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

const mapsStateToProps = state => {
    const { persons } = state;
    return { persons };
}

const mapDispatchToProps = {
    saveMyMagic
}

//make this component available to the app
export default connect(mapsStateToProps, mapDispatchToProps)(CardMagic);
