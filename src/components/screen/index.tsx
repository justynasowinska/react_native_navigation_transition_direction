import React, { ReactNode } from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IScreenHeaderProps, ScreenHeader } from '../ScreenHeader';

import styles from './styles';

interface Props extends IScreenHeaderProps {
  children: ReactNode;
}

export const Screen: React.FC<Props> = ({ children, ...headerProps }) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
        <ScreenHeader {...headerProps} />
        <View style={[styles.screen, { paddingBottom: safeAreaInsets.bottom }]}>
          {children}
        </View>
      </View>
    </>
  );
};
