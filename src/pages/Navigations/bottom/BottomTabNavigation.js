import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import { HomeTabNavigation } from '../Top/HomeTabNavigation';
import { HistoryTabNavigation } from '../Top/HistoryTabNavigation';
import { MagicTabNavigation } from '../Top/MagicTabNavigation';

const DESC_ICON     = require('../../../../resources/img/warrior_icon.png');
const MAGIC_ICON    = require('../../../../resources/img/mage_icon.png');
const HISTORY_ICON  = require('../../../../resources/img/history_icon.png');

const Tab = createBottomTabNavigator();
export function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRoute="HomeScreen"
            tabBarOptions={{
                activeTintColor: '#D6A200',
                activeBackgroundColor: '#262626',
                showLabel: false,
                inactiveBackgroundColor: '#383838',
                style: {
                    borderTopColor: '#D6A200',
                    borderTopWidth: 1,
                }
            }}
        >
            <Tab.Screen 
                name="HomeScreen" 
                component={HomeTabNavigation}
                options={{
                    tabBarIcon: () => (<Image source = {DESC_ICON} style = {{width: 30, height: 30}} />)
                }} />
            <Tab.Screen 
                name="History" 
                component={HistoryTabNavigation}
                options={{
                    tabBarIcon: () => (<Image source = {HISTORY_ICON} style = {{width: 30, height: 30}} />)
                }} />
            <Tab.Screen 
                name="Magics" 
                component={MagicTabNavigation}
                options={{
                    tabBarIcon: () => (<Image source = {MAGIC_ICON} style = {{width: 30, height: 30}} />)
                }} />
        </Tab.Navigator>
    );

}
