import { createStackNavigator } from 'react-navigation';
import Home from './pages/Home';


export default createStackNavigator({
    'Home': {
        screen: Home,
        navigationOptions: {

        }
    }
}, {
        navigationOptions: {
            title: 'MyGrimorio',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: '#383838',
                borderBottomWidth: 1,
                borderBottomColor: '#515151'
            },
            headerTitleStyle: {
                color: '#FFFFFF',
                fontSize: 30,
                flex: 1,
                textAlign: 'center'
            }
        }
    }

);