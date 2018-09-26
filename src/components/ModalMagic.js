//import liraries
import React from 'react';
import { 
    ScrollView,
    Dimensions,
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import HTML from 'react-native-render-html';

import LineMagic from './lines/LineMagic';

const CLOSE_ICON = require('../../resources/img/close_icon.png');

// create a component
const ModalMagic = ({magic, setVisible}) => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIconContainer}>
                <TouchableOpacity onPress={setVisible}>
                    <Image source={CLOSE_ICON} style={styles.iconClose} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.containerModal}>
                <View style={styles.modalDefault}>
                    <Text style={styles.name}>{ magic.name }</Text>
                    <Text style={styles.TextHeader}>{ magic.level }º nível de {magic.school.pt} {magic.concentration ? '(Concentração)' : magic.ritual ? '(Ritual)' : '' }</Text>
                    <LineMagic label="Conjuradores:" value={ magic.classes.map(classe => (` ${classe} |`)) } textHeader />
                </View>
                <View style={[styles.modalDefault, styles.bodyModal]}>
                    <LineMagic label="Tempo de conjuração:" value={ magic.castingTime } />
                    <LineMagic label="Alcance:" value={ magic.range } />
                    <LineMagic label="Componentes:" value={ magic.components } />
                    <LineMagic label="Duração:" value={ magic.duration } last />
                    <HTML html={ magic.description } staticContentMaxWidth={Dimensions.get('window').width - 5} />
                </View>
                <View style={[styles.modalDefault, styles.footerModal]}>
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
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#D6A200',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    TextHeader: {
        fontSize: 16,
        color: '#878787'
    },
    containerModal: {
        backgroundColor: '#FFF'
    },
    closeIconContainer: {
        position: 'absolute',
        top: 7,
        right: 7,
        elevation: 1,
        zIndex: 10
    },
    iconClose: {
        width: 25,
        height: 25,
    },
    modalDefault: {
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        padding: 10,
        paddingRight: 30,
        borderColor: '#DDD',
    },
    flexModal:{
        flex: 1,
    },
    footerModal: {
        borderWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
});

//make this component available to the app
export default ModalMagic;
