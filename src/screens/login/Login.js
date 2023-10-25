import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Pressable,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <ImageBackground style={{flex: 1}} source={require('../../image/bg.png')}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Pressable
          onPress={() => navigation.goBack()}
          style={({pressed}) => [
            styles.btnLogin,
            {opacity: pressed ? 0.6 : 1},
          ]}>
          <Text style={styles.txt1}>{'Login'}</Text>
        </Pressable> */}
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: '#FAF0F8',
    borderWidth: 1,
    borderColor: '#B792F2',
    width: 254,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    fontSize: 20,
    fontWeight: '500',
    color: '#3A3030',
  },
});
