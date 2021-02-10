import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, Switch } from 'react-native';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers'
import { Montserrat_600SemiBold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat'
import { EventRegister } from 'react-native-event-listeners'
import { DefaultTheme, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native'



import AppLoading from 'expo-app-loading'

function WelcomeScreen({ navigation }) {

  const [darkMode, setDarkMode] = useState(false)
  const { colors } = useTheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'blue',
      backgroundImage: "../assets/PlaneDark.jpg",
      mode: "black"
    },
  };

  const MyTheme2 = {
    ...DefaultTheme,
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,

  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const onPress = () => navigation.navigate('Trip Type')

  const plane = "../assets/Plane.jpg"


  return (
    <ImageBackground
      style={[styles.background, { backgroundColor: colors.card }]}
    // source={require(plane)}
    >

      <LottieView source={require("../assets/logo/airplaneAnimation.json")} autoPlay style={styles.logoAirplane} />
      <Text style={[styles.logoHeader, { color: colors.text }]}>PACKING LIST 4 U</Text>

      <TouchableOpacity
        style={[styles.startButton]}
        onPress={onPress}>
        <Text style={[styles.startText, { color: colors.card }]}>Start Packing</Text>
      </TouchableOpacity>
      <View style={styles.darkToggle}>
        <Switch
          trackColor={{ false: "blue", true: "blue" }}
          thumbColor={darkMode ? "black" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => {
            setDarkMode(value)
            EventRegister.emit('changeThemeEvent', value)
          }}
          value={darkMode}
        />
        <Text style={[styles.darkText, { color: colors.text }]}>Dark Mode</Text>

      </View>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,//background takes entire screen
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  logoAirplane: {
    bottom: 260
  },
  logoHeader: {
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    fontFamily: "Bangers_400Regular",
    fontSize: 50,
    left: 40,
    bottom: 50
  },
  startButton: {
    alignItems: 'center',
    width: "100%",
    padding: 10,
    height: 70,
    backgroundColor: "blue",
    top: 130
  },
  startText: {
    color: "white",
    // padding: 15,
    fontFamily: "Bangers_400Regular",
    textAlign: 'center',
    fontSize: 30,
    top: 5
  },
  darkToggle: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    top: 130

  },
  darkText: {
    fontFamily: "Bangers_400Regular",
    // textAlign: 'center',
    fontSize: 30,
    paddingTop: 15,
  },
  logo: {
    width: 100,
    height: 100,
    left: 130,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    color: "white",
    alignItems: "center"
  }
})

export default WelcomeScreen;