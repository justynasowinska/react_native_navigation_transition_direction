import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../components/Screen';
import styles from './styles';

export const Modal3Page: React.FC<{}> = () => {
  return (
    <Screen headerTitle="Modal 3 Page" rightAction="back">
      <Text style={styles.screenText}>Last Page</Text>
    </Screen>
  );
};
