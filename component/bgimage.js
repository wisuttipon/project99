import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styes';

const image = { uri: 'https://reactjs.org/logo-og.png' };

export default function App() {
  return (
    <View style={styles.containerBG}>
      <ImageBackground source={image} style={styles.image}>
      </ImageBackground>
    </View>
  );
}
