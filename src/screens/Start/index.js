import * as React from 'react';
import {View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import MenuButton from '../../components/MenuButton';
import styles, {getScreenStyles} from './styles';

const StartScreen = () => {
  const isDrawerOpen = useIsDrawerOpen();
  const screenStyles = getScreenStyles(isDrawerOpen);

  return (
    <View style={[styles.container, screenStyles.background]}>
      <Animated.View style={[styles.animatedContainer, screenStyles.animation]}>
        <View style={styles.header}>
          <MenuButton />
          <Text style={styles.headerText}>START</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default StartScreen;
