//import liraries
import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native';

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

    render() {
        const { 
            name, 
            castingTime, 
            range,
            components,
            duration,
            school
        } = this.props.magic;

        return (
            <View>
                <TouchableOpacity 
                    onPress={() => this.setState({modalVisible: true})}
                    style={[styles.container, (this.props.first || this.props.last ) ? styles.firstOrLast : null ]}>
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
        height: 120,
        marginHorizontal: 10,
        marginVertical: 2.5,
        padding: 5,
        borderRadius: 5,
        elevation: 1,
        backgroundColor: '#FFF',
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    firstOrLast: {
        marginTop: 5,
    }
});

//make this component available to the app
export default CardMagic;
