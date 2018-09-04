//import liraries
import React from 'react';
import { 
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const CLOSE_ICON = require('../../resources/img/close_icon.png');

// create a component
const ModalMagic = ({magic}) => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIconContainer}>
                <TouchableOpacity onPress={() => console.log('teste')}>
                    <Image source={CLOSE_ICON} style={styles.iconClose} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.containerModal}>
                <View style={styles.headerModal}>
                    <Text>{ magic.name }</Text>
                </View>
                <View style={styles.bodyModal}>
                    <Text>{ magic.description }</Text>
                </View>
                <View style={styles.footerModal}>
                    <Text>Fonte: { magic.nome }</Text>
                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#383838',
    },
    containerModal: {
        backgroundColor: '#FFF'
    },
    closeIconContainer: {
        position: 'absolute',
        top: 2,
        right: 2
    },
    iconClose: {
        width: 10,
        height: 10,
    },
    headerModal: {
        borderWidth: 1,
        borderColor: '#000',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    bodyModal:{
        borderWidth: 1,
        borderColor: '#000',
    },
    footerModal: {

        borderWidth: 1,
        borderColor: '#000',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
});

//make this component available to the app
export default ModalMagic;
