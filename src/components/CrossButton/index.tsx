import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { DEFAULT_ICON_HIT_SLOP } from '../utils/constants';

interface Props {
  onPress: () => void;
  iconSize?: number;
}

export const CrossButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress} hitSlop={DEFAULT_ICON_HIT_SLOP}>
    <Icon name="close" size={24} />
  </TouchableOpacity>
);
