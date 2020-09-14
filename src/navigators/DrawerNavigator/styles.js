import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme';

export default StyleSheet.create({
  username: {
    fontFamily: 'Avenir-Roman',
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 38,
    color: 'white',
    marginLeft: 48,
    marginTop: 70,
    marginBottom: 57,
  },
  delimeter: {
    width: 175,
    height: 1,
    backgroundColor: colors.darkGrey,
    marginLeft: 25,
    marginVertical: 60,
  },
  signOut: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
    lineHeight: 27,
    color: 'white',
    marginLeft: 48,
  },
  labelStyle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: -0.5,
    marginLeft: 19,
  },
  itemStyle: {
    borderRadius: 15.5,
    width: 175,
    height: 51,
    marginLeft: 20,
    marginVertical: 5,
  },
  drawerStyle: {
    backgroundColor: colors.darkPurple,
    width: 196,
    borderTopLeftRadius: 39,
  },
  mockContainer: {
    alignSelf: 'center',
    marginTop: 100,
  },
});
