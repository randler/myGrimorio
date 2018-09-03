//import liraries
import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';

import CardForm from '../components/CardForm';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <CardForm >

                <Text>Teste</Text>

            </CardForm>
           {/* <Image 
                style={styles.imageBook}
                source={require('../../resources/img/book.jpg')} />
            <View style={styles.imageDndContainer}>
                <Image style={styles.imageDD}
                    source={require('../../resources/img/dndred.png')} />
           </View>*/}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    }
});

//make this component available to the app
export default Home;
