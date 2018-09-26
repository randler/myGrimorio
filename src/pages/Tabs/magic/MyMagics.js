//import liraries
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    FlatList,
    Text,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import CardMagic from '../../../components/cards/CardMagic';

// create a component
class MyMagics extends Component {

    getPerson() {
        const arrayPerson = Object.entries(this.props.persons)[0];
        return arrayPerson[1];
    }

    renderMagics() {
        const person = this.getPerson();
        if(person.myMagics) {
            if(person.myMagics.length) {
                return (<FlatList 
                        data={this.getMagics()}
                        keyExtractor={item => item.name}
                        renderItem={({item}) => <CardMagic myMagic={true} magic = { item } />} />);
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
                        <Text style={styles.nothingMagics}>Não tem nenhuma magia em seu Grimório</Text>
                    </View>)
        }
    }

    getMagics() {
        const person = this.getPerson();
        return person.myMagics;
    }

    render() {
        return (
            
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {this.renderMagics()}
                </ScrollView>
                {/*<View style={styles.filterContainer}>
                    <TouchableOpacity 
                        onPress={() => this.setSearchMode(!this.state.searchMode)}>
                        <Image source={FILTER_ICON} style={styles.filterIcon} />
                    </TouchableOpacity>
                </View>*/}
                
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

const mapStateToProps = state => {
    const { persons } = state;
    return { persons };
}

//make this component available to the app
export default connect(mapStateToProps)(MyMagics);
