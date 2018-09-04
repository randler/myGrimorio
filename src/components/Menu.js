//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const menu = require('../../resources/img/menu_icon.png');
const icon1 = require('../../resources/img/5ered.png');
const icon2 = require('../../resources/img/5eblack.png');

// create a component
const Menu = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style = {styles.imageIcon} source = {icon1} />
            </View>            
            <View>
                <Image style = {styles.imageIcon} source = {icon2} />
            </View>            
            <View>
                <Image style = {styles.imageIcon} source = {icon2} />
            </View>            
            <View>
                <Image style = {styles.imageIcon} source = {icon2} />
            </View>            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageIcon: {
        width: 30,
        height: 30,
        aspectRatio: 1
    }
});

//make this component available to the app
export default Menu;
