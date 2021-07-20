//import liraries
import React from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Picker,
    StyleSheet,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { searchMagic, clearFilter } from '../actions';

import niveis from '../../resources/data/js/niveis';
import classes from '../../resources/data/js/classes';

// create a component
class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            nivel: 'Todas',
            classe: 'Todas'
        }
    }

    clearState() {
        this.setState({
            nome: '',
            nivel: 'Todas',
            classe: 'Todas'
        });
        this.props.clearFilter();
    }

    setField(label, value) {
        this.setState({
            [label]: value
        });

        //this.props.searchMagic(label, value);
    }
    componentDidUpdate() {
        this.search();
    }

    search() {
         const valueSearch = {
            name: this.state.nome       == ''       ? null : this.state.nome,
            level: this.state.nivel     == 'Todas'  ? null : this.state.nivel,
            classe: this.state.classe   == 'Todas'  ? null : this.state.classe
        };
        
        this.props.searchMagic(valueSearch); 
    }

    niveis() {
        return niveis.map((value, index) => <Picker.Item 
                                                label={value} 
                                                key={index} 
                                                value={value} 
                                            />);
    }
    classes() {
        return classes.map((value, index) => <Picker.Item 
                                                label={value} 
                                                key={index} 
                                                value={value} 
                                            />);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>Nome: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite o nome da magia"
                        placeholderTextColor='#000'
                        value={this.state.nome}
                        onChangeText={ nome => this.setField('nome', nome)}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={[styles.textLabel, styles.textLabelPicker]}>Nível: </Text>
                    <Picker
                        style={[styles.picker, styles.pickerNivel]}
                        value={this.state.nivel}
                        selectedValue={this.state.nivel}
                        onValueChange={ nivel => this.setField('nivel', nivel) }>
                            { this.niveis() }
                    </Picker>

                    <Text style={[styles.textLabel, styles.textLabelPicker]}>Classe: </Text>
                    <Picker
                        style={[styles.picker, styles.pickerClasse]}
                        value={this.state.classe}
                        selectedValue={this.state.classe}
                        onValueChange={ classe => this.setField('classe', classe) }>
                            { this.classes() }
                    </Picker>
                </View>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#D6A200',
        height: 110,
        padding: 5,
        backgroundColor: '#FFF',
    },
    row: {
        flexDirection: 'row',
    },
    textLabel:{
        marginTop: 8,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    textLabelPicker: {
        marginTop: 12
    },
    input: {
        flex: 1,
        marginLeft: 5,
        padding: 8,
    },
    picker: {
        marginLeft: 5,
    },
    pickerNivel: {
        width: 100,
    },
    pickerClasse: {
        width: Dimensions.get('window').width - 210,
    }
});

/*const mapDispatchToProps = dispatch => {
    return {
        dispatchSearch: (label, value) => dispatch(searchMagic(label, value))
    }
}*/

const mapDispatchToProps = {
    searchMagic,
    clearFilter
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(SearchBar);
