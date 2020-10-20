import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { BackArrowButton } from '../BackArrowButton';
import { CrossButton } from '../CrossButton';

import styles from './styles';

type TRightAction = 'back' | 'close';

export interface IScreenHeaderProps {
  headerTitle: string;
  rightAction?: TRightAction;
}

export const ScreenHeader: React.FC<IScreenHeaderProps> = ({
  headerTitle,
  rightAction,
}) => {
  const navigation = useNavigation();

  const onPressBackHandle = () => navigation.goBack();

  const renderLeftAction = () => {
    if (rightAction === 'back') {
      return (
        <View style={styles.leftAction}>
          <BackArrowButton onPress={onPressBackHandle} />
        </View>
      );
    }

    if (rightAction === 'close') {
      return (
        <View style={styles.leftAction}>
          <CrossButton onPress={onPressBackHandle} />
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.header}>
      {renderLeftAction()}
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  );
};
