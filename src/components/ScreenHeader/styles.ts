import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
  },
  leftAction: {
    position: 'absolute',
    left: 16,
    bottom: 0,
    top: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
