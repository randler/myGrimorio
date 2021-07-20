//import liraries
import React from 'react';
import { 
    View, 
    StyleSheet,
    TouchableWithoutFeedback 
} from 'react-native';

// create a component
const CardFormFooter = props => {
    
    const { children, toScreen } = props;
    return (
        <TouchableWithoutFeedback onPress = { toScreen }>
            <View style = {styles.container}>
                { children }
            </View>
        </TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        padding: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#a37c00',
        backgroundColor: '#383838',
    },
});

//make this component available to the app
export default CardFormFooter;
