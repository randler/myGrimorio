import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../../Tabs/home/Home';
import Weapons from '../../Tabs/home/Weapons';

const Tab = createMaterialTopTabNavigator();

export function HistoryTabNavigation() {
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
                name="DescriptionScreen"
                component={Home}
                options={{
                    header: null,
                    title: 'Descrição'
                }}
            />
            <Tab.Screen
                name="weapons"
                component={Weapons}
                options={{
                    header: null,
                    title: 'Armas'
                }}
            />
        </Tab.Navigator>
    )
};