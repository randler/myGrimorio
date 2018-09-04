//import liraries
import React from 'react';
import { 
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

const PICTURE = require('../../../../resources/img/picture_standard.png');

// create a component
class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.name}>NOME</Text>
                    <Text style={styles.descText}>Classe - Nível</Text>
                    <Text style={styles.descText}>Raça</Text>
                    <Text style={styles.descText}>Tendência</Text>
                    <Text style={styles.descText}>Antecedente</Text>
                </View>
                <View style={styles.containerImage}>
                    <Image source={PICTURE} style={styles.image} />
                </View>
                
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#DDD',
    },
    descText: {
        fontSize: 18
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    containerImage: {
        padding: 3,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#000',
        position: 'absolute',
        right: 5,
        top: 10,
    },
    image: {
        width: 150,
        height: 150,
        aspectRatio: 1
    }
});

//make this component available to the app
export default Home;
