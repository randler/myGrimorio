import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';

import { BottomTabNavigator } from './pages/Navigations/bottom/BottomTabNavigation';

export default createStackNavigator({
    'login': {
        screen: Login,
    },
    'register': {
        screen: Register,
        navigationOptions: {
            title: 'Cadastre-se',
            headerTitleStyle: {
                color: '#FFFFFF',
                fontSize: 30,
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
                fontSize: 30,
                marginLeft: 80,
                flex: 1,
                textAlign: 'center',
                marginBottom: 5, 
            }
        }
    }
);