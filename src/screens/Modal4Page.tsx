import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../components/Screen';
import styles from './styles';

export const Modal4Page: React.FC<{}> = () => {
  return (
    <Screen headerTitle="Modal 4 Page - Regular Animation" rightAction="back">
      <Text style={styles.screenText}>Last Page</Text>
    </Screen>
  );
};
