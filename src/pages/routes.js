import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Home from './Home'
import Login from './Login'
import Search from './Search'

const Tab = createBottomTabNavigator();

 export default function Routes() {
    return(

        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#1b1b1b',
                borderTopWidth: 0,
                height: 60,
            }
        }}
        
        >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false
            }}
            />

            <Tab.Screen
            name="Login"
            component={Login}
            options={{
                headerShown: false
            }}
            />

            <Tab.Screen
            name="Search"
            component={Search}
            options={{
                headerShown: false
            }}
            />
        </Tab.Navigator>

    )
}

