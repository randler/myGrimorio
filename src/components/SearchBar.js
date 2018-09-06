//import liraries
import React from 'react';
import { 
    View,
    Text,
    TextInput,
    Picker,
    StyleSheet,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { searchMagic } from '../actions';

import niveis from '../../resources/data/niveis';
import classes from '../../resources/data/classes';

// create a component
class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nivel: 0,
            classe: ''
        }
    }

    setField(label, value) {
        this.setState({
            [label]: value
        });
        
        this.props.searchMagic( label, value );
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
                <View style={styles.containerSearch}>
                    <Text style={styles.textLabel}>Nome: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite o nome da magia"
                        placeholderTextColor='#000'
                        value={this.state.name}
                        onChangeText={ name => this.setField('name', name)}
                    />
                </View>
                <View style={styles.containerSearch}>
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
        height: 100,
        padding: 5,
        backgroundColor: '#FFF',
    },
    containerSearch: {
        flexDirection: 'row',
    },
    textLabel:{
        marginTop: 8,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    textLabelPicker: {
        marginTop: 20
    },
    input: {
        flex: 1,
        marginLeft: 5,
        paddingLeft: 8,
    },
    picker: {
        marginLeft: 5,
    },
    pickerNivel: {
        width: 60,
    },
    pickerClasse: {
        width: Dimensions.get('window').width - 180,
    }
});

/*const mapDispatchToProps = dispatch => {
    return {
        dispatchSearch: (label, value) => dispatch(searchMagic(label, value))
    }
}*/

const mapDispatchToProps = {
    searchMagic,
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(SearchBar);
