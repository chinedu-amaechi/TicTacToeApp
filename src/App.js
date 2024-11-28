// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SelectPlayerScreen from './screens/SelectPlayerScreen';
import GameScreen from './screens/GameScreen';
import WinScreen from './screens/WinScreen';
import DrawScreen from './screens/DrawScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f8f8f8',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="SelectPlayer" 
          component={SelectPlayerScreen} 
          options={{ title: 'Select Player' }} 
        />
        <Stack.Screen 
          name="Game" 
          component={GameScreen} 
          options={{ title: 'Game' }} 
        />
        <Stack.Screen 
          name="Win" 
          component={WinScreen} 
          options={{ title: 'Winner!' }} 
        />
        <Stack.Screen 
          name="Draw" 
          component={DrawScreen} 
          options={{ title: 'Game Drawn' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
