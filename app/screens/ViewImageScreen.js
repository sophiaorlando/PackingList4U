

import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';


const colors1 = [
  '#4B371C', '#D22D16', '#113CCF', '#36A1D4', '#1D5B6E', '#F96574',
  '#687431', '#8DB2CD', '#32e314', '#4CC1A1', "#F7DC6F"
]

const DATA = [
  {
    title: 'Road Trip',
    id: 0,
    icon: "car"
  },
  {
    title: 'Romantic Weekend Getaway',
    id: 1,
    icon: "rose"

  },
  {
    title: 'Disney World',
    id: 2,
    icon: "color-wand"

  },
  {
    title: 'Ski Trip',
    id: 3,
    icon: "beer"

  },
  {
    title: 'College Dorm',
    id: 4,
    icon: "pencil"

  },
  {
    title: 'Hawaii',
    id: 5,
    icon: "sunny"

  },
  {
    title: 'Camping',
    id: 6,
    icon: "bonfire"

  },
  {
    title: 'NYC Winter Weekend',
    id: 7,
    icon: "snow"

  },
  {
    title: 'Golf Trip',
    id: 8,
    icon: "golf-outline"

  },
];
// console.log(DATA[0])

function FlatListBasics({ navigation }) {
  const { colors } = useTheme();



  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.header, { color: colors.text }]}>Packing List Type</Text>

      <FlatList
        data={DATA}
        renderItem={({ item, index }) =>
          <TouchableOpacity onPress={() => navigation.navigate('Packing List', { title: item.title, id: item.id })} style={[styles.item, { backgroundColor: colors1[index % colors1.length] }]}>
            <Text style={[styles.tripTitle, { color: colors.card }]}>
              <Ionicons name={item.icon} size={29} color="white" style={[styles.image, { color: colors.card }]} />
              {"  "}{item.title}
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "whitesmoke",

  },
  header: {
    color: "black",
    fontFamily: "Bangers_400Regular",
    textAlign: 'center',
    fontSize: 40
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 64,
    margin: 25,
    color: "white",
    borderRadius: 15,
  },
  image: {
    width: 40,
    height: 50,
    marginLeft: 10
  },
  tripTitle: {
    color: "white",
    fontFamily: "Bangers_400Regular",
    fontSize: 25,
    marginLeft: 5,
  }
})

export default FlatListBasics;