//import liraries
import React from 'react';
import { 
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    View,
    ActivityIndicator,
    Modal,
    StyleSheet 
} from 'react-native';
import firebase from 'firebase';

import CardMagic from '../../../components/CardMagic';

import SearchBar from '../../../components/SearchBar';
import { setMagics } from '../../../actions';

import { connect } from 'react-redux';

const FILTER_ICON = require('../../../../resources/img/filter.png');

// create a component
class AllMagics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchMode: false
        }
    }

    componentWillMount() {
        firebase.database().ref("magics")
            .on('value', (snapshot) => {
                const magics = snapshot.val();
                //this.setState({magics});
                this.props.setMagics(magics);
        });
    }

    setSearchMode(visible) {
        this.setState({searchMode: visible});
    }

    renderSearch() {
        if(this.state.searchMode) {
            return (<SearchBar />);
        }
    }

    renderCardMagic(magic, key) {
        if(key == 0){
            return ( <CardMagic key={key} first magic = { magic } /> );
        } else if( key == (this.props.all_magics.length - 1)) {
            return ( <CardMagic key={key} last magic = { magic } /> );
        }
        return ( <CardMagic key={key} magic = { magic } /> );
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderSearch() }
                <ScrollView contentContainerStyle={styles.contencContainer}>
                    {this.props.all_magics.length > 0 ? 
                        this.props.all_magics.map( (magic, key) => this.renderCardMagic(magic, key) ) :
                        (<View style={{
                            height: Dimensions.get('window').height - 100,
                            justifyContent: 'center',
                            alignItems: 'center', }}>
                            <ActivityIndicator size="large" color = "#d6a200" />
                        </View>)}
                </ScrollView>
                <View style={styles.filterContainer}>
                    <TouchableOpacity 
                        onPress={() => this.setSearchMode(!this.state.searchMode)}>
                        <Image source={FILTER_ICON} style={styles.filterIcon} />
                    </TouchableOpacity>
                </View>
                
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
    filterContainer: {
        backgroundColor: '#383838',
        height: 80,
        width: 80,
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#DDD',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    filterIcon:{
        marginTop: 16,
        alignSelf: 'center',
        width: 40,
        height: 40,
        aspectRatio: 1
    },
    contencContainer: {
        paddingVertical: 1,
    }
});

const mapDispatchToProps = {
    setMagics
}

const mapStateToProps = state => {
    const { all_magics } = state;
    return { all_magics };
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(AllMagics);
