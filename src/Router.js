import { React } from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import { BottomTabNavigator } from './pages/Navigations/bottom/BottomTabNavigation';
import AddPerson from './pages/person/AddPerson';

export default createStackNavigator({
    'login': {
        screen: Login,
    },
    'dashboard': {
        screen: Dashboard,
        navigationOptions: {
            title: 'Meus personagens',
            headerTitleStyle: {
                color: '#FFFFFF',
                fontSize: 25,
                flex: 1,
                textAlign: 'center',
                marginBottom: 5, 
                marginLeft: 60,
            }
        }
    },
    'register': {
        screen: Register,
        navigationOptions: {
            title: 'Cadastre-se',
            headerTitleStyle: {
                color: '#FFFFFF',
                fontSize: 25,
                flex: 1,
                textAlign: 'center',
                marginBottom: 5, 
            }
        }
    },
    'addPerson': {
        screen: AddPerson,
        navigationOptions: {
            title: 'Novo Personagem',
            headerTitleStyle: {
                color: '#FFFFFF',
                fontSize: 25,
                flex: 1,
                textAlign: 'center',
                marginBottom: 5, 
            }
        }
    },
    'home': {
        screen: BottomTabNavigator,
        navigationOptions: {
            title: null,
            headerStyle: {
                height: 0,
                backgroundColor: '#383838'
            },            
        }
    },
}, {
        navigationOptions: {
            title: 'MyGrimório',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: '#383838',
                borderBottomWidth: 1,
                borderBottomColor: '#a37c00'
            },
            headerTitleStyle: {
                color: '#FFFFFF',
                fontSize: 25,
                marginLeft: 80,
                flex: 1,
                textAlign: 'center',
                marginBottom: 5, 
            }
        }
    }
);