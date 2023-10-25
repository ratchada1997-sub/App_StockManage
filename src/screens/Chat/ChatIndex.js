import {ImageBackground, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';


const ChatIndex = () => {
  return (
    <ImageBackground source={require('../../image/bg3.png')} style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Pressable
          onPress={() => navigation.navigate('Login')}
          style={({pressed}) => [
            styles.btnLogin,
            {opacity: pressed ? 0.6 : 1},
          ]}>
          <Text style={styles.txt1}>{'Home'}</Text>
        </Pressable> */}
      </View>
    </ImageBackground>
  );
};

export default ChatIndex;

const styles = StyleSheet.create({});
