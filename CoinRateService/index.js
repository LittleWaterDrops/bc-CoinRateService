/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
//import App from './App';
import DefaultScreen from './src/screens/DefaultScreen';

AppRegistry.registerComponent(appName, () => DefaultScreen);
