import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from './screens/Home';
import { Modal1Page } from './screens/Modal1Page';
import { Modal2Page } from './screens/Modal2Page';
import { Modal3Page } from './screens/Modal3Page';
import { Modal4Page } from './screens/Modal4Page';
import { NotModal } from './screens/NotModal';
import { horizontalAnimation, verticalAnimation } from './utils';

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
  Modal4Page: undefined;
};

const ModalScreen: React.ComponentType = () => {
  return (
    <ModalStack.Navigator
      headerMode="none"
      initialRouteName="Modal1Page"
      screenOptions={horizontalAnimation}>
      <ModalStack.Screen name="Modal1Page" component={Modal1Page} />
      <ModalStack.Screen name="Modal2Page" component={Modal2Page} />
      <ModalStack.Screen
        name="Modal3Page"
        component={Modal3Page}
        options={verticalAnimation}
      />
      <ModalStack.Screen name="Modal4Page" component={Modal4Page} />
    </ModalStack.Navigator>
  );
};

export const router = () => {
  return (
    <Root.Navigator headerMode="none" initialRouteName="Home" mode="modal">
      <Root.Screen name="Home" component={Home} />
      <Root.Screen name="Modal" component={ModalScreen} />
      <Root.Screen
        name="NotModal"
        component={NotModal}
        options={horizontalAnimation}
      />
    </Root.Navigator>
  );
};
