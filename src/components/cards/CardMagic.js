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
                    onLongPress={() => this.saveMyMagic(this.props.magic)}
                    style={[styles.container, this.props.myMagic ? styles.myMagicHeigth: null , (this.props.first || this.props.last ) ? styles.firstOrLast : null ]}>
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
                                    onPress={() => this.saveMyMagic(this.props.magic)} >
                                    <Text style={styles.txtMyMagic}> Adicionar a minha lista </Text>
                                </TouchableHighlight>}
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
        height: 150,
        marginHorizontal: 10,
        marginVertical: 2.5,
        padding: 5,
        borderRadius: 5,
        elevation: 1,
        backgroundColor: '#FFF',
        flex: 1,
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
