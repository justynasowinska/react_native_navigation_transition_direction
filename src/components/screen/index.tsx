import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface Props {
  screenName: string;
}

export const Screen: React.FC<Props> = ({ screenName }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>{screenName}</Text>
    </View>
  );
};
