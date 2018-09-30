//import liraries
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    Alert,
    RefreshControl,
    FlatList,
    Text,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { getMyMagics, removeMyMagic } from '../../../actions'

import CardMagic from '../../../components/cards/CardMagic';

// create a component
class MyMagics extends Component {

    constructor(props) {
        super(props);

        this.state = {
            magics: [],
            refreshing: false
        }
    }

    async componentWillMount() {
        this.getMyMagics();
    }

    async getMyMagics() {
        const keyPerson = this.getKeyPerson();
        const magics = await this.props.getMyMagics(keyPerson);
        this.setState({magics});
    }

    getKeyPerson() {
        const arrayPerson = Object.entries(this.props.persons)[0];
        return arrayPerson[0];
    }

    async deleteMagic(magic) {
        const keyPerson = this.getKeyPerson();
        await Alert.alert(
            `Remover "${magic.name}"`, 
            'Deseja remover essa magia?',
            [
                {text: 'Cancelar', onPress: () =>{} },
                {text: 'Sim', onPress: () => this.props.removeMyMagic(magic, keyPerson)}
            ],
            { cancelable: false });
        this.getMyMagics();
    }

    

    renderMagics() {
        if(this.state.magics) {
            if(this.state.magics.length > 0) {
                return (
                    <FlatList 
                        data={this.state.magics}
                        keyExtractor={item => item.name}
                        renderItem={({item}) => <CardMagic deleteMagic={(magic) => this.deleteMagic(magic) } myMagic={true}  magic = { item } />} />);
            } else {
                return (<View style={{
                            height: Dimensions.get('window').height - 100,
                            justifyContent: 'center',
                            alignItems: 'center', }}>
                            <ActivityIndicator size="large" color = "#d6a200" />
                        </View>)
            }
        } else {
            return (<View style={{
                        padding: 8,
                        justifyContent: 'center',
                        alignItems: 'center', }}>
                        <Text style={styles.nothingMagics}>Sem magias no Grimório</Text>
                    </View>)
        }
    }

    render() {
        return (
            
            <View style={styles.container}>
                <ScrollView 
                    contentContainerStyle={styles.contentContainer}
                    refreshControl={<RefreshControl colors={['#5B4500', '#967101', '#bf9003', '#D6A200','#eab100', '#383838']} tintColor={'#D6A200'} refreshing={this.state.refreshing}  onRefresh={() => this.getMyMagics()} />}>
                    {this.renderMagics()}
                </ScrollView>                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    },
    nothingMagics: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#D6A200',
    },
    contentContainer: {
        paddingVertical: 1,
    }
});

const mapDispatchToProps = {
    getMyMagics,
    removeMyMagic
}

const mapStateToProps = state => {
    const { persons } = state;
    return { persons };
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(MyMagics);
