import { createMaterialTopTabNavigator } from 'react-navigation';

import Home from './home/Home';
import Weapons from './home/Weapons';

export const HomeTabNavigation = createMaterialTopTabNavigator({
    'DescriptionScreen': {
        screen: Home,
        navigationOptions: { 
            header: null,
            title: 'Descrição'
        }
    },
    'weapons': {
        screen: Weapons,
        navigationOptions: { 
            header: null,
            title: 'Armas'
        }
    }


}, {
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: '#D6A200',
            style: {
                backgroundColor: '#383838',
                borderBottomWidth: 1,
                borderBottomColor: '#D6A200',
            }
        }
    }
);