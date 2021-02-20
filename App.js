import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './AppComponents/Screens/LoginScreen';
import MainScreen from './AppComponents/Screens/MainScreen';
import BoardScreen from './AppComponents/Screens/BoardScreen'
import MakingBoardScreen from './AppComponents/Screens/MakingBoardScreen'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "main" component={MainScreen}/>
        <Stack.Screen name = "board" component={BoardScreen}/>
        <Stack.Screen name = "makingboard" component={MakingBoardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

