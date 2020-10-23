import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import { Screen } from '../components/Screen';
import { RootScreenList } from '../router';

interface Props {
  navigation: StackNavigationProp<RootScreenList>;
}

export const Home: React.FC<Props> = ({ navigation }) => {
  const onPressFormButton = () => navigation.navigate('Modal');
  const onPressSettingsButton = () => navigation.navigate('NotModal');

  return (
    <Screen headerTitle="Home">
      <Button title="Modal" onPress={onPressFormButton} />
      <Button title="Not Modal" onPress={onPressSettingsButton} />
    </Screen>
  );
};
