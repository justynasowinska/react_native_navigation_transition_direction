import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import styles from './styles';

interface Props {
  children: ReactNode;
}

export const Screen: React.FC<Props> = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.screen}>{children}</View>
      </SafeAreaView>
    </>
  );
};
