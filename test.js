import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = ()=> {
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="root" component={root}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
function root(){
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image source={require('./src/assets/home.png')} resizeMode='contain' style={{width: 20, height: 20}}/>),
      }}/>
       <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image source={require('./src/assets/notification.png')} resizeMode='contain' style={{width: 20, height: 20}}/>),
      }}/>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image source={require('./src/assets/profile.png')} resizeMode='contain' style={{width: 20, height: 20}}/>),
      }}/>
      </Tab.Navigator>
  );
};

export default App;
