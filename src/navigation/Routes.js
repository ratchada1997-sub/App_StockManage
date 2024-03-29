import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllProducts from '../screens/Product/AllProducts';
import Login from '../screens/login/Login';
import {navigationRef} from '../RootNavigation';
import {
  TransitionPresets,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedIndex from '../screens/Feed/FeedIndex';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ChatIndex from '../screens/Chat/ChatIndex';
import IntroScreen from '../screens/IntroScreens/IntroScreen';
import AddProducts from '../screens/Product/AddProducts';
import EditProduct from '../screens/Product/EditProduct';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeIndex"
      activeColor="#4F200D"
      screenOptions={{
        tabBarActiveTintColor: '#4F200D',
        headerShown: false,
      }}>
      <Tab.Screen
        name="AllProducts"
        component={AllProducts}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="store" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FeedIndex"
        component={FeedIndex}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="page-layout-footer"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatIndex"
        component={ChatIndex}
        options={{
          tabBarLabel: 'chat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'setting',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={async () => {
        const Screen = navigationRef.current.getCurrentRoute().name;
        setTimeout(() => {
          console.log('***************** ', Screen, '*****************');
        }, 500);
      }}>
      <Stack.Navigator
        initialRouteName="IntroScreen"
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        })}>
        <Stack.Group>
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="IntroScreen" component={IntroScreen} />
          <Stack.Screen name="AddProducts" component={AddProducts} />
          <Stack.Screen name="EditProduct" component={EditProduct} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
