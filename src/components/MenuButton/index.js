import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const MenuButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image
        style={styles.image}
        source={require('../../assets/images/open-menu.png')}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
