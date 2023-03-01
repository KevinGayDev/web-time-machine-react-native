import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './searchScreen';
import AboutScreen from './aboutScreen';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default function Home() {
    const Tab = createBottomTabNavigator();
    
    return (
      <Tab.Navigator>
        <Tab.Screen name="Rechercher" 
        component={SearchScreen}
        options={
          {
            tabBarIcon: ({focused}) => (<Icon name="ios-home" color={focused ? "#ff0000" : "#333333"} size={25}/>),
            headerShown: false,
            headerBackVisible: false
          }}
        />

        <Tab.Screen name="A propos" 
        component={AboutScreen}
        options={
          {
            tabBarIcon: ({focused}) => (<Icon name="person" color={focused ? "#ff0000" : "#333333"} size={25}/>),
            headerShown: false,
            headerBackVisible: false
          }}
        />
      </Tab.Navigator>
    );
  }