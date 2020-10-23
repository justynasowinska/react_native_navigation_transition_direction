import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from './screens/Home';
import { Modal1Page } from './screens/Modal1Page';
import { Modal2Page } from './screens/Modal2Page';
import { Modal3Page } from './screens/Modal3Page';
import { NotModal } from './screens/NotModal';

const Root = createStackNavigator();
const ModalStack = createStackNavigator();

export type RootScreenList = {
  Home: undefined;
  Modal: undefined;
  NotModal: undefined;
};

export type ModalScreenList = {
  Modal1Page: undefined;
  Modal2Page: undefined;
  Modal3Page: undefined;
};

const ModalScreen: React.ComponentType = () => {
  return (
    <ModalStack.Navigator
      headerMode="none"
      mode="modal"
      initialRouteName="Modal1Page">
      <ModalStack.Screen name="Modal1Page" component={Modal1Page} />
      <ModalStack.Screen name="Modal2Page" component={Modal2Page} />
      <ModalStack.Screen name="Modal3Page" component={Modal3Page} />
    </ModalStack.Navigator>
  );
};

export const router = () => {
  return (
    <Root.Navigator headerMode="none" initialRouteName="Home">
      <Root.Screen name="Home" component={Home} />
      <Root.Screen name="Modal" component={ModalScreen} />
      <Root.Screen name="NotModal" component={NotModal} />
    </Root.Navigator>
  );
};
