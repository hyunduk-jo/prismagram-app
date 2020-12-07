import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/instagram.png")]);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    preLoad();
  }, [])
  return loaded ? (
    <View>
      <Text>Open up App.js to start working on your app! Hello!</Text>
    </View>
  ) : (
      <AppLoading />
    )
}