import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Animation1Screen from '../screens/Animation1Screen';
import Animation2Screen from '../screens/Animation2Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Animation1Screen"
        component={Animation1Screen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Animation2Screen"
        component={Animation2Screen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SwitchScreen"
        component={SwitchScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AlertScreen"
        component={AlertScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TextInputScreen"
        component={TextInputScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SectionListScreen"
        component={SectionListScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ModalScreen"
        component={ModalScreen}
      />
    </Stack.Navigator>
  );
};
