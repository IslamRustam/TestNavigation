import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme';


const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 39,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginLeft: 36,
    marginTop: 25,
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'Avenir-Roman',
    color: colors.grey,
    fontSize: 24,
    lineHeight: 33,
    letterSpacing: 5,
    marginLeft: 35,
  },
  transformNegative: {
    marginLeft: 50,
    marginTop: 15,
    transform: [{rotate: '-8deg'}],
  },
  transformNone: {
    transform: [{rotate: ''}],
  },
});

export const getScreenStyles = (isDrawerOpen) => {
  return {
    animation: isDrawerOpen ? styles.transformNegative : styles.transformNone,
    background: isDrawerOpen ? {backgroundColor: colors.darkPurple} : null,
  };
};

export default styles;
