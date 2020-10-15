import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text } from 'react-native';
import { Screen } from '../components/screen';
import { ModalFormScreenList } from '../router';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<ModalFormScreenList>;
}

export const ModalForm2: React.FC<Props> = ({ navigation }) => {
  const onPressForm1Button = () => navigation.navigate('Form1');
  const onPressForm3Button = () => navigation.navigate('Form3');

  return (
    <Screen>
      <Text style={styles.screenText}>Modal Form 2</Text>
      <Button title="Modal Form 1" onPress={onPressForm1Button} />
      <Button title="Modal Form 3" onPress={onPressForm3Button} />
    </Screen>
  );
};
