import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/home/Login';
import Register from './pages/home/Register';
import Dashboard from './pages/home/Dashboard';

import { BottomTabNavigator } from './pages/Navigations/bottom/BottomTabNavigation';
import AddPerson from './pages/person/AddPerson';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    title: 'MyGrimório',
                    headerTintColor: '#FFFFFF',
                    headerStyle: {
                        backgroundColor: '#383838',
                        borderBottomWidth: 1,
                        borderBottomColor: '#a37c00'
                    },
                    headerTitleStyle: {
                        color: '#FFFFFF',
                        fontSize: 25,
                        marginLeft: 80,
                        //fontFamily: 'Lobster-Regular',
                        flex: 1,
                        textAlign: 'center',
                        marginBottom: 5,
                    }
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Cadastre-se',
                        headerTitleStyle: {
                            color: '#FFFFFF',
                            fontSize: 25,
                            flex: 1,
                            textAlign: 'center',
                            marginBottom: 5,
                        }
                    }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        title: 'Meus personagens',
                        headerTitleStyle: {
                            color: '#FFFFFF',
                            fontSize: 25,
                            flex: 1,
                            textAlign: 'center',
                            marginBottom: 5,
                            marginLeft: 60,
                        }
                    }}
                />
                <Stack.Screen
                    name="AddPerson"
                    component={AddPerson}
                    options={{
                        title: 'Novo Personagem',
                        headerTitleStyle: {
                            color: '#FFFFFF',
                            fontSize: 25,
                            flex: 1,
                            textAlign: 'center',
                            marginBottom: 5,
                        }
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={BottomTabNavigator}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#383838',
                            height: 0
                        },
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
};