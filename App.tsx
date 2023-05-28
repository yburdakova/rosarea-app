import React, {useCallback} from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import Navigation, {StackParamsList} from './src/navigators/Navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [isLoaded] = useFonts({
    "Raleway-regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-xbold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-xligth": require("./assets/fonts/Raleway-ExtraLight.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); 
    }
  }, [isLoaded]);
  
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={handleOnLayout} style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
});
