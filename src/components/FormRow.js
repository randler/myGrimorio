//import liraries
import React from 'react';
import { 
    View,
    StyleSheet 
} from 'react-native';

// create a component
const FormRow = props => {
    const { children, first, last } = props;
    return (
        <View style={[
                styles.container,
                first ? styles.first : null,
                last ? styles.last : null,
            ]}>
            { children }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    first: {
        marginTop: 10,
    },
    last: {
        marginBottom: 10,
    }
});

//make this component available to the app
export default FormRow;
