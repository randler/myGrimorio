//import liraries
import React from 'react';
import { 
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';


// create a component
class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

//make this component available to the app
export default Home;
