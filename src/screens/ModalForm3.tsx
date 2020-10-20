import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text } from 'react-native';
import { Screen } from '../components/Screen';
import { ModalFormScreenList } from '../router';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<ModalFormScreenList>;
}

export const ModalForm3: React.FC<Props> = ({ navigation }) => {
  const onPressForm1Button = () => navigation.navigate('Form1');
  const onPressForm2Button = () => navigation.navigate('Form2');

  return (
    <Screen headerTitle="Modal Form 3" rightAction="close">
      <Text style={styles.screenText}>Modal Form 3</Text>
      <Button title="Modal Form 1" onPress={onPressForm1Button} />
      <Button title="Modal Form 2" onPress={onPressForm2Button} />
    </Screen>
  );
};
