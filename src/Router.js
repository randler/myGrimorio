import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login';

export default createStackNavigator({
    'Login': {
        screen: Login,
    }
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