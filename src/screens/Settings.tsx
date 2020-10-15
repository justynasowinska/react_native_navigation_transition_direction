import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../components/screen';
import styles from './styles';

export const Settings: React.FC<{}> = () => {
  return (
    <Screen>
      <Text style={styles.screenText}>Settings Screen</Text>
    </Screen>
  );
};
