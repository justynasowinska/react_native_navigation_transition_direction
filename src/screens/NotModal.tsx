import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../components/Screen';
import styles from './styles';

export const NotModal: React.FC<{}> = () => {
  return (
    <Screen headerTitle="NotModal" rightAction="back">
      <Text style={styles.screenText}>NotModal Screen</Text>
    </Screen>
  );
};
