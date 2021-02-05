import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWarining: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: Constants.statusBarHeight,
  },
  textWarning: {
    textAlign: 'center',
    color: '#333',
  },
  buttonPermissions: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#9400d3',
  },
  buttonTextPermission: {
    fontSize: 18,
    color: '#fff',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  borderToContainerActions: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 20,
  },
  containerActions: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  borderTakePicture: {
    borderWidth: 1,
    borderColor: '#9400d3',
    padding: 4,
    borderRadius: 18,
  },
  buttonTakePicture: {
    width: 40,
    height: 40,
    borderRadius: 18,
    backgroundColor: '#9400d3',
  },
});

export default styles;
