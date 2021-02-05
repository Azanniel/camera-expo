import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TakePicture from './pages/TakePicture';
import PictureCaptured from './pages/PictureCaptured';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TakePicture" component={TakePicture} />
      <Stack.Screen name="PictureCaptured" component={PictureCaptured} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
