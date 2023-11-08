import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
// import {createStackNavigator} from '@react-navigation/stack';
import {AboutCompany, Details} from '../screen';
// const Stack = createStackNavigator();
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      // initialRouteName="HomeTestNav"
      screenOptions={{
        gestureDirection: 'vertical',
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="AboutCompany"
        component={AboutCompany}
        options={{
          gestureDirection: 'vertical',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
