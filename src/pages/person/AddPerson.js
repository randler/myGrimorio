//import liraries
import React, { Component } from 'react';
import {
    Alert,
    View,
    ScrollView,
    Image,
    Text,
    Dimensions,
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

import FormRow from '../../components/forms/FormRow';
import CardAbility from '../../components/cards/CardAbility';

import racas from '../../../resources/data/js/racas';
import tendencias from '../../../resources/data/js/tendencias';
import antecedentes from '../../../resources/data/js/antecedentes';
import antecedentDesc from '../../../resources/data/js/antecedentDesc';
import classesAdd from '../../../resources/data/js/classesAdd';
import requisitoMultiClasse from '../../../resources/data/js/requisitoMultiClasse';

import { createPerson, NIVEIS, getNameAtributo, getBonusProficiencia } from '../../../resources/data/js/utils';
import { salvarPersonagem } from '../../actions';

import LinePickerAddPerson from '../../components/lines/LinePickerAddPerson';


// create a component
class AddPerson extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            forca: '1',
            destreza: '1',
            constituicao: '1',
            inteligencia: '1',
            sabedoria: '1',
            carisma: '1',
            race: '',
            tendency: '',
            classe: 'Classes',
            multiClasse: true,
            classeArray:[],
            nivel: '1',
            nivelTotal: '0',
            antecedent: 'Antecedentes',
            personalidade: '',  
            ideais: '',
            vinculo: '',
            defeito: ''

        }
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    getValue(label){
        return this.state[label];
    }

    adicionarClasse() {
        const nivelState = parseInt(this.state.nivel);
        const nivelTotalState = parseInt(this.state.nivelTotal) + nivelState;
        const nameClassState = this.state.classe;
        let multiClasse = true;
        let atributoMin = [];

        if(this.state.classeArray.length > 0) {
            Object.entries(requisitoMultiClasse)
                    .map(multi => {
                        if(multi[0] === nameClassState ) {
                            multi[1].map((atributo) => {
                                if(this.state[atributo] < 13) {
                                    multiClasse = false;
                                    atributoMin.push(getNameAtributo(atributo));
                                }
                            })
                        }
                    })

        }
        if(!multiClasse)
            return Alert.alert(
                'Multiclasse não permitido',
                `${atributoMin.length > 1 ? 'Atributos' :'Atributo'} "${atributoMin.map((valor => ' ' + valor + ' ' ))}" ${atributoMin.length > 1 ? 'baixos' :'baixo'} para essa classe`,
                [
                    {text: 'OK', onPress: () => {}},
                ],
                { cancelable: false }
            )
        if( (nivelTotalState > 0 && nivelTotalState <= 20) &&
            (nivelState > 0 && nivelState <= 20) &&        
            nameClassState !== 'Classes' ) {

                let nivelTotal = nivelState;
                let flagSave = true;

                this.state.classeArray
                            .forEach( 
                                classe => {
                                    if(classe.name === nameClassState)
                                        flagSave = false;
                                    nivelTotal += parseInt(classe.level)
                                });

                if (flagSave) {
                    const newClass = { 
                        name: nameClassState,
                        level: nivelState
                    }

                    this.setState({
                        nivelTotal: ''+ nivelTotal,
                        classeArray: [
                            ...this.state.classeArray,
                            newClass
                        ]
                    });
                }
        }
    }
    removerClasse(value) {
        let newArrayClasse = this.state?.classeArray;
        const indexClasse = newArrayClasse?.indexOf(value);
        if ( indexClasse > -1) {
            newArrayClasse?.splice(indexClasse, 1);
            let nivelTotal = 0;

            this.state.classeArray
                        .forEach( 
                            classe => {
                                nivelTotal += parseInt(classe.level)
                            });
            this.setState({
                nivelTotal: '' + nivelTotal,
                classeArray: newArrayClasse
            });
          }
    }

    renderClassArray() {
        if(this.state.classeArray.length > 0) { 
            return this.state.classeArray
                    .map((value, index) => (
                            <View key={index} style={styles.containerClass}>
                                <Text style={styles.resultClass}>{value.name} - {value.level} </Text>
                                <TouchableOpacity 
                                    onPress={() => this.removerClasse(value)}>
                                    <Text style={styles.removeClass}>remover</Text>
                                </TouchableOpacity>
                            </View>)
                    )
        }
        return null;
    }


    getPickerItem = (item) => {
        return item.map((value, index) => <Picker.Item 
                                            label={value} 
                                            key={index} 
                                            value={value} 
                                        />);
    }

    renderTraces() {
        //Caso seja o primeiro retorna null caso contrario entra na condição
        if (this.state.antecedent !== 'Antecedentes') {
            //transforma o objeto antecedente em array e percorre
            return Object.entries(antecedentes).map(ant => {
                //verifica se a o antecedente é o escolhido
                if (ant[0] === this.state.antecedent) {
                    //tranforma o objeto [ {} ] do antecedente escolhido
                    // em array e percorre
                    return Object.entries(ant[1])
                        .map((trace) => (
                            //retorna os valores encontrados dentro do picker
                            <FormRow key={trace[0]}>
                                <Text style={styles.txtLabel}>{trace[0]}</Text>
                                <Picker
                                    style={[styles.picker, styles.pickerTrace]}
                                    value={this.getValue(trace[0])}
                                    selectedValue={this.getValue(trace[0])}
                                    onValueChange={ (itemValue) => this.onChangeHandler(trace[0], itemValue) }>
                                        {this.getPickerItem(trace[1])}
                                </Picker>
                            </FormRow>)
                        )
                }
            }) 
        } 
        return null
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <FormRow first>
                        <Text style={styles.txtLabel}>Nome</Text>
                        <TextInput
                            style = {styles.textInput}
                            placeholder = "Nome do personagem"
                            value = {this.state.name}
                            onChangeText = { value => this.onChangeHandler('name', value)} />
                    </FormRow>
                </View>
                <View style={[styles.row, styles.card]}>
                    <LinePickerAddPerson
                        title='Raça'
                        label='race'
                        value={this.state.race}
                        onChangeHandler={(label, value) => this.onChangeHandler(label, value)}
                        item={racas}
                            />
                    <LinePickerAddPerson
                        title='Tendência'
                        label='tendency'
                        value={this.state.tendency}
                        onChangeHandler={(label, value) => this.onChangeHandler(label, value)}
                        item={tendencias}
                            />                    
                </View>
                {/*HABILIDADES*/}
                <View style={styles.card}>
                    <View style={styles.row}>
                        <CardAbility 
                            title='Força' 
                            label='forca' 
                            value={this.getValue('forca')} 
                            onChangeHandler={(label, value) => this.onChangeHandler(label, value)} />
                        <CardAbility 
                            title='Destreza'
                            label='destreza' 
                            value={this.getValue('destreza')} 
                            onChangeHandler={(label, value) => this.onChangeHandler(label, value)} />
                    </View>
                    <View style={styles.row}>
                        <CardAbility 
                            title='Constituição'
                            label='constituicao' 
                            value={this.getValue('constituicao')} 
                            onChangeHandler={(label, value) => this.onChangeHandler(label, value)} />
                        <CardAbility 
                            title='Inteligência'
                            label='inteligencia' 
                            value={this.getValue('inteligencia')} 
                            onChangeHandler={(label, value) => this.onChangeHandler(label, value)} />
                    </View>
                    <View style={styles.row}>
                        <CardAbility 
                            title='Sabedoria'
                            label='sabedoria' 
                            value={this.getValue('sabedoria')} 
                            onChangeHandler={(label, value) => this.onChangeHandler(label, value)} />
                        <CardAbility 
                            title='Carisma'
                            label='carisma' 
                            value={this.getValue('carisma')} 
                            onChangeHandler={(label, value) => this.onChangeHandler(label, value)} />
                    </View>
                
                </View>
                {/*CLASSES*/}
                <View style={styles.card}>
                    <View style={styles.row}>
                        <LinePickerAddPerson
                            title='Classe'
                            label='classe'
                            value={this.state.classe}
                            onChangeHandler={(label, value) => this.onChangeHandler(label, value)}
                            item={classesAdd}
                            styleCustom={styles.pickerRowMore}/>  
                        <LinePickerAddPerson
                            title='Nível'
                            label='nivel'
                            value={this.state.nivel}
                            onChangeHandler={(label, value) => this.onChangeHandler(label, value)}
                            item={NIVEIS}
                            styleCustom={styles.pickerRowMin}/>  
                    </View>
                        <TouchableOpacity 
                            style={styles.btnAddClass}
                            onPress={() => this.adicionarClasse()}>
                            <Text style={styles.txtBtnAddClass}>Adicionar classe</Text>
                        </TouchableOpacity>
                        {this.renderClassArray()} 
                        <View style={styles.row}>
                            <Text style={styles.nivelLabel}>Nivel Total:</Text>
                            <Text style={styles.nivelValue}>{this.state.nivelTotal}</Text>
                        </View>                       
                </View>

                {/*BÔNUS DE PROFICIÊNCIA*/}
                <View style={styles.card}>
                    <View style={[styles.row, {margin: 5}]}>
                        <Text style={styles.txtLabel}>Bônus de Proficiência:</Text>
                        <Text style={styles.nivelValue}>{getBonusProficiencia(this.state.nivelTotal)} </Text>
                    </View>
                </View>

                {/*TRAÇOS DE PERSONALIDADE*/}
                <View style={styles.card}>
                    <LinePickerAddPerson
                                title='Antecedente'
                                label='antecedent'
                                value={this.state.antecedent}
                                onChangeHandler={(label, value) => this.onChangeHandler(label, value)}
                                item={antecedentDesc}
                                antecedente={true}
                                styleCustom={null}
                                /> 
                    { this.renderTraces() }
                </View>
                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={() => this.addNewPerson()}>
                    <Text style={styles.txtBtnAdd}>Adicionar</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }

    async addNewPerson() {
        var person = createPerson(this.state);

        console.log(person);

        const response = await this.props.salvarPersonagem(person);
        if(response) {
           return this.props.navigation.navigate('Dashboard');
        }
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 1,
        padding: 3,
        margin: 5
    },
    row: {
        flexDirection: 'row',
    },
    textInput: {
        padding: 5,
        paddingLeft: 15
    },
    txtLabel: {
        color: '#CCC',
        fontWeight: 'bold',
    },
    txtBtnAdd: {
        color: '#FFF',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    btnAdd: {
        margin: 10,
        backgroundColor: '#a37c00',
        borderRadius: 5,
    },
    nivelTotalContainer: {
        marginVertical: 5,
        alignSelf: 'center',
    },
    nivelLabel: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#CCC'
    },
    nivelValue: {
        marginLeft: 5,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#383838'
    },
    btnAddClass: {
        margin: 5,
        backgroundColor: '#383838',
        borderRadius: 3
    },
    txtBtnAddClass: {
        color: '#FFF',
        padding: 10,
        fontSize: 12,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    containerClass: {
        marginVertical: 3,
        flexDirection: 'row',
    },
    resultClass: {
        flex: 1,
        margin: 5,
        fontWeight: 'bold',
        color: '#555',
        alignSelf: 'center',
    },
    removeClass: {
        width: 50,
        alignSelf: 'center',
        padding: 5,
        marginRight: 5,
        backgroundColor: '#FF0000',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 11,
        borderRadius: 5,
    }
});

const mapDispatchToProps = {
    salvarPersonagem
}

const mapStateToProps = state => {
    const { user } = state;
    return user;
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);
