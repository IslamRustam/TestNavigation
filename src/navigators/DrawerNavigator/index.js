import * as React from 'react';
import {Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StartScreen from '../../screens/Start';
import {colors} from '../../constants/theme';
import styles from './styles';

const MockScreen = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.mockContainer}>
      <Text>Open drawer</Text>
    </TouchableOpacity>
  );
};

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.username}>Viktor</Text>
      <DrawerItemList {...props} />
      <View style={styles.delimeter} />
      <TouchableOpacity>
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Start"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerStyle={styles.drawerStyle}
        sceneContainerStyle={styles.sceneContainerStyle}
        drawerType={'slide'}
        overlayColor={0}
        drawerContentOptions={{
          activeTintColor: colors.lightRed,
          inactiveTintColor: 'white',
          labelStyle: styles.labelStyle,
          itemStyle: styles.itemStyle,
        }}>
        <Drawer.Screen name="Start" component={StartScreen} />
        <Drawer.Screen name="Your Cart" component={MockScreen} />
        <Drawer.Screen name="Favourites" component={MockScreen} />
        <Drawer.Screen name="Your Orders" component={MockScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
