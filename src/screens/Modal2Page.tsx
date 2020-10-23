import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import { Screen } from '../components/Screen';
import { ModalScreenList } from '../router';

interface Props {
  navigation: StackNavigationProp<ModalScreenList>;
}

export const Modal2Page: React.FC<Props> = ({ navigation }) => {
  const onPressNext = () => navigation.navigate('Modal3Page');

  return (
    <Screen headerTitle="Modal 2 Page" rightAction="back">
      <Button title="Next Page" onPress={onPressNext} />
    </Screen>
  );
};
