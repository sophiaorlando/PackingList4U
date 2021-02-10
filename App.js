import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListScreen from './app/screens/ListScreen';

import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventRegister } from 'react-native-event-listeners'



export default function App() {
  const [darkApp, setDarkApp] = useState(false)



  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  useEffect(() => {
    let eventListener = EventRegister.addEventListener('changeThemeEvent', (data) => {
      setDarkApp(data)
    })
    return () => {
      EventRegister.removeEventListener(eventListener)
    }
  }, [])

  const Stack = createStackNavigator();


  const { landscape } = useDeviceOrientation()
  // const { colors } = useTheme();



  return (

    <NavigationContainer theme={appTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Trip Type" component={ViewImageScreen} />
        <Stack.Screen name="Packing List" component={ListScreen} />


      </Stack.Navigator>

    </NavigationContainer>
  );
}

const containerStyle = { backgroundColor: "orange" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
