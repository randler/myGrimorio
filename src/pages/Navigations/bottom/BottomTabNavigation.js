import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';

import { HomeTabNavigation } from '../Top/HomeTabNavigation';
import { HistoryTabNavigation } from '../Top/HistoryTabNavigation';

import Magics from '../../Tabs/magic/Magics';

const DESC_ICON     = require('../../../../resources/img/warrior_icon.png');
const MAGIC_ICON    = require('../../../../resources/img/mage_icon.png');
const HISTORY_ICON  = require('../../../../resources/img/history_icon.png');

export const BottomTabNavigator = createBottomTabNavigator ({
    'HomeScreen': {
        screen: HomeTabNavigation,
        navigationOptions: {
            tabBarIcon: <Image source = {DESC_ICON} style = {{width: 30, height: 30}} />
        }
    },
    'History': {
        screen: HistoryTabNavigation,
        navigationOptions: {
            tabBarIcon: <Image source = {HISTORY_ICON} style = {{width: 30, height: 30}} />
        }
    },
    'Magics': {
        screen: Magics,
        navigationOptions: {
            tabBarIcon: <Image source = {MAGIC_ICON} style = {{width: 30, height: 30}} />
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#D6A200',
        activeBackgroundColor: '#262626',
        showLabel: false,
        inactiveBackgroundColor: '#383838',
        style: {
            borderTopColor: '#D6A200',
            borderTopWidth: 1,
        }
    }
}
)