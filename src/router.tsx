import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from './screens/Home';
import { ModalForm1 } from './screens/ModalForm1';
import { ModalForm2 } from './screens/ModalForm2';
import { ModalForm3 } from './screens/ModalForm3';
import { Settings } from './screens/Settings';

const ModalRoot = createStackNavigator();
const ModalFormStack = createStackNavigator();

export type ModalRootScreenList = {
  Home: undefined;
  Form: undefined;
  Settings: undefined;
};

export type ModalFormScreenList = {
  Form1: undefined;
  Form2: undefined;
  Form3: undefined;
};

const ModalFormScreen: React.ComponentType = () => {
  return (
    <ModalFormStack.Navigator mode="modal" initialRouteName="Form 1">
      <ModalFormStack.Screen name="Form1" component={ModalForm1} />
      <ModalFormStack.Screen name="Form2" component={ModalForm2} />
      <ModalFormStack.Screen name="Form3" component={ModalForm3} />
    </ModalFormStack.Navigator>
  );
};

export const router = () => {
  return (
    <ModalRoot.Navigator initialRouteName="Home">
      <ModalRoot.Screen name="Home" component={Home} />
      <ModalRoot.Screen name="Form" component={ModalFormScreen} />
      <ModalRoot.Screen name="Settings" component={Settings} />
    </ModalRoot.Navigator>
  );
};
