import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { DEFAULT_ICON_HIT_SLOP } from '../utils/constants';

import styles from './styles';

interface Props {
  onPress: () => void;
  iconSize?: number;
}

export const CrossButton = ({ onPress }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.backPadding}
    hitSlop={DEFAULT_ICON_HIT_SLOP}>
    <Text>X</Text>
  </TouchableOpacity>
);
