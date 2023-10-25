import {StyleSheet, View, StatusBar,LogBox} from 'react-native';
import React from 'react';

import Routes from './src/navigation/Routes';
import 'react-native-gesture-handler';
import SplashScreen from "react-native-splash-screen";
const App = () => {
  LogBox.ignoreAllLogs(true);
  setTimeout(() => {
    SplashScreen.hide();
  }, 1000);
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    ])
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Routes />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
