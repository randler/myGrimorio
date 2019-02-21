import { createMaterialTopTabNavigator } from 'react-navigation';


import MyMagics from '../../Tabs/magic/MyMagics';
import AllMagics from '../../Tabs/magic/AllMagics';

export const MagicTabNavigation = createMaterialTopTabNavigator({
    'myMagics': {
        screen: MyMagics,
        navigationOptions: { 
            header: null,
            title: 'Minhas'
        }
    },
    'allMagics': {
        screen: AllMagics,
        navigationOptions: { 
            header: null,
            title: 'Todas'
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