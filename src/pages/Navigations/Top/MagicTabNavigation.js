import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import MyMagics from '../../Tabs/magic/MyMagics';
import AllMagics from '../../Tabs/magic/AllMagics';

const Tab = createMaterialTopTabNavigator();

export function MagicTabNavigation() {
    return (
        <Tab.Navigator
            tabBarPosition="top"
            tabBarOptions={{
                activeTintColor: '#D6A200',
                style: {
                    backgroundColor: '#383838',
                    borderBottomWidth: 1,
                    borderBottomColor: '#D6A200',
                }
            }}
        >
            <Tab.Screen
                name="MyMagics"
                component={MyMagics}
                options={{
                    header: null,
                    title: 'Minhas'
                }}
            />
            <Tab.Screen
                name="AllMagics"
                component={AllMagics}
                options={{
                    header: null,
                    title: 'Todas'
                }}
            />

        </Tab.Navigator>
    )
};