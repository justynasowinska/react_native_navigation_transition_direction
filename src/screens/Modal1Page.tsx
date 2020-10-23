import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import { Screen } from '../components/Screen';
import { ModalScreenList } from '../router';

interface Props {
  navigation: StackNavigationProp<ModalScreenList>;
}

export const Modal1Page: React.FC<Props> = ({ navigation }) => {
  const onPressNextPage = () => navigation.navigate('Modal2Page');

  return (
    <Screen headerTitle="Modal 1 Page - Modal Animation" rightAction="close">
      <Button title="Next Page" onPress={onPressNextPage} />
    </Screen>
  );
};
