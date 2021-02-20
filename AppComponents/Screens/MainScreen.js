import React from "react";
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import TimetableScreen from './TimetableScreen'
import SettingsScreen from './SettingsScreen'

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator
        screenOptions = {({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if(route.name == 'Home'){
                iconName = focused ? 'home' : 'home-outline';
            } else if(route.name === 'Timetable') {
                iconName = focused ? 'time' : 'time-outline';
            } else if(route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color}/>;
        },
        })}
        tabBarOptions={{
            activeTintColor: 'blue',
            inactieTintColor: 'gray',
        }}
        >
            <Tab.Screen name = "Home" component={HomeScreen} />
            <Tab.Screen name = "Timetable" component={TimetableScreen} />
            <Tab.Screen name = "Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default MainScreen;
