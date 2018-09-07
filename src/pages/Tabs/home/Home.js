//import liraries
import React from 'react';
import { 
    View,
    ScrollView,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

import DescText from '../../../components/DescText';
import Traces from '../../../components/Traces';

const PICTURE   = require('../../../../resources/img/picture_standard.png');

// create a component
class Home extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={styles.containerDesc}>
                    <Text style={styles.name}>Ethan Belmont</Text>
                        <DescText label='Clase' value='Patrulheiro-7/Ladino-5/Paladino-6/Feiticeiro-1' />
                        <DescText label='Raça' value='Asimar' />
                        <DescText label='Tendência' value=' Caótico/Bom' />
                        <DescText label='Antecedente' value='Nobre' />
                        <DescText label='XP' value='0' last />

                    </View>  
                    <View style={styles.containerImage}>
                        <Image source={PICTURE} style={styles.image} />
                    </View>  
                </View>
                <Traces 
                    label='Traços de Personalidade' 
                    value='Eu sinto uma empatia tremenda por todos que sofrem.' />
                <Traces 
                    label='Ideais' 
                    value='Bem Maior. Meus dons devem ser partilhados com todos, não usados em benefício próprio (Bom) 
                    DEVER. Viverei de acordo com o que juro fazer ou morrerei tentando.' />
                <Traces 
                    label='Ligações' 
                    value='Meu isolamento me deu grande discernimento sobre um grande mal que apenas eu posso destruir.
                    Um "certo" vampiro jurou vingança contra todos os Belmont depois de ser derrotado por um.' />
                <Traces 
                    last
                    label='Defeitos' 
                    value='Eu gosto de guardar segredos e não os partilho com ninguém.
                    Não costumo fazer amigos com facilidade.' />
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

//make this component available to the app
export default Home;
