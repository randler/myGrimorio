import { createMaterialTopTabNavigator } from 'react-navigation';

import Home from '../../Tabs/home/Home';
import Weapons from '../../Tabs/home/Weapons';

export const HistoryTabNavigation = createMaterialTopTabNavigator({
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