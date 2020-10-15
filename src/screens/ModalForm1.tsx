import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text } from 'react-native';
import { Screen } from '../components/screen';
import { ModalFormScreenList } from '../router';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<ModalFormScreenList>;
}

export const ModalForm1: React.FC<Props> = ({ navigation }) => {
  const onPressForm2Button = () => navigation.navigate('Form2');
  const onPressForm3Button = () => navigation.navigate('Form3');

  return (
    <Screen>
      <Text style={styles.screenText}>Modal Form 1</Text>
      <Button title="Modal Form 2" onPress={onPressForm2Button} />
      <Button title="Modal Form 3" onPress={onPressForm3Button} />
    </Screen>
  );
};
