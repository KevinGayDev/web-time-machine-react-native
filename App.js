import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'; 

import LoginScreen from './components/loginScreen';
import Nav from './components/navMenu';
import PreviewScreen from './components/previewScreen';

import styles from "./styles/style_App"

export default function App() 
{
  const Stack = createStackNavigator();

  return (
    <NavigationContainer style = {styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Se connecter" 
            component={LoginScreen}   
            options=
            {{
              tabBarStyle: { display: "none" },
              tabBarIcon: () => (<Icon name="key" size={25}/>),
              headerShown: false,
              headerBackVisible: false
            }}
            />
          <Stack.Screen name="Menu" component={Nav} 
          options = {{
            headerShown: false,
            headerBackVisible: false,
          }}/>
          <Stack.Screen
            name="Details" 
            component={PreviewScreen}   
            options=
            {{
              tabBarStyle: { display: "none" },
              tabBarIcon: () => (<Icon name="key" size={25}/>),
              headerShown: true,
              headerBackVisible: true
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
