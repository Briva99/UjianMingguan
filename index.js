/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';


import _ from 'lodash';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);


const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

AppRegistry.registerComponent(appName, () => App);
