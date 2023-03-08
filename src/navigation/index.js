/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenName from './screenName';
import {SCREENS} from '../utils/Constant';

export const ScreenStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.LOGIN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.LOGIN} component={ScreenName.Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
