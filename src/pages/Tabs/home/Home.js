//import liraries
import React from 'react';
import { 
    View,
    ScrollView,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { firebase } from 'firebase';

import DescText from '../../../components/DescText';
import Traces from '../../../components/Traces';

import { getPerson } from '../../../actions';

const PICTURE   = require('../../../../resources/img/picture_standard.png');

// create a component
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //this.props.getPerson(this.props.navigation.getParam('id'));
        /*firebase.database().ref("persons")
            .on('value', (snapshot) => {
                const persons = snapshot.val();
                this.props.setPersons(persons);
        });*/
    }

    render() {
        return (
            <ScrollView >
            {this.props.persons.map(person => {
                    return (
                        <View style={styles.container} key={person.idPerson}>
                            <View style={styles.containerHeader}>
                                <View style={styles.containerDesc}>
                                        <Text style={styles.name}>{person.name}</Text>
                                        <DescText label='Clase' value={person.class} />
                                        <DescText label='Raça' value={person.race} />
                                        <DescText label='Tendência' value={person.tendency} />
                                        <DescText label='Antecedente' value={person.antecedent} />
                                        <DescText label='XP' value={person.xp} last />
                                
                                    </View>  
                                    <View style={styles.containerImage}>
                                        <Image source={PICTURE} style={styles.image} />
                                    </View>  
                            </View>
                            <Traces label='Traços de Personsalidade' value={person.antecedentTraces} />
                            <Traces label='Ideais' value={person.antecedentTraces} />
                            <Traces label='Ligações' value={person.antecedentTraces} />
                            <Traces last label='Defeitos' value={person.antecedentTraces} />
                        </View>
                    )
                })
            }
            </ScrollView>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#DDD',
    },
    containerHeader: {
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#DDD',
    },
    containerDesc: {
        flex: 1,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    containerImage: {
        padding: 3,
    },
    image: {
        width: 150,
        height: 150,
        aspectRatio: 1
    },
});

const mapDispatchToProps = {
    getPerson
}

const mapStateToProps = state => {
    const { persons } = state;
    return { persons };
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Home);
