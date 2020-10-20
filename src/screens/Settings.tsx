import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../components/Screen';
import styles from './styles';

export const Settings: React.FC<{}> = () => {
  return (
    <Screen headerTitle="Settings" rightAction="back">
      <Text style={styles.screenText}>Settings Screen</Text>
    </Screen>
  );
};
