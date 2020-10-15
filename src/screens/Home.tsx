import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text } from 'react-native';
import { Screen } from '../components/screen';
import { ModalRootScreenList } from '../router';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<ModalRootScreenList>;
}

export const Home: React.FC<Props> = ({ navigation }) => {
  const onPressFormButton = () => navigation.navigate('Form');
  const onPressSettingsButton = () => navigation.navigate('Settings');

  return (
    <Screen>
      <Text style={styles.screenText}>Home Screen</Text>
      <Button title="Form" onPress={onPressFormButton} />
      <Button title="Settings" onPress={onPressSettingsButton} />
    </Screen>
  );
};
