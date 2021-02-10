import React, { useState, setState } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'
import CheckBoxCustom from '../config/CheckBoxCustom'
import { packingListDetails } from '../config/TripData'
import { useTheme } from '@react-navigation/native';



const boxColor = [
  '#8d8c8a', '#d5d7d4', '#96a1a7', '#697479', '#a9b6ba'
]

const initialArr = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];



function ListScreen({ navigation, route }) {
  // console.log(numberArray)

  const [checked, toggleChecked] = useState(false)

  const tripId = route.params.id

  const packingListArr = Object.keys(packingListDetails[tripId])

  const [list, setList] = useState(packingListArr)

  const listDetails = Object.values(packingListDetails[tripId]).map(function (details) { return [details][0] })
  const numberArray = Object.keys(initialArr).map(function (num) { return initialArr[num].id })
  // console.log(Object.keys(listDetails[1]))
  const { colors } = useTheme();


  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: colors.card }]}>
        <Text style={[styles.header, { color: colors.text }]}>{route.params.title} Packing List</Text>
        {numberArray.map((number, index) => (
          <View style={[styles.box1, { backgroundColor: boxColor[index % boxColor.length] }]}>
            <Text style={[styles.listHeader, { color: colors.card }]}>{list[number]}</Text>
            {listDetails[number].map((details, index) => (
              <CheckBoxCustom
                title={details}
                textStyle={[styles.checkbox, { color: colors.text }]}
              />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  header: {
    color: "black",
    fontFamily: "Bangers_400Regular",
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 15
  },
  listHeader: {
    color: "black",
    fontFamily: "Bangers_400Regular",
    textAlign: 'center',
    fontSize: 40,
    padding: 12
  },
  box1: {
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 25,
    marginTop: 15,
    padding: 15

  },
  checkbox: {
    color: "black",
    paddingRight: 25,
    paddingTop: 8,
    paddingBottom: 8,

    // padding: 15,
    fontFamily: "Bangers_400Regular",
    // textAlign: 'center',
    fontSize: 29,
    width: "100%",
    // padding: 8
  }
})

export default ListScreen
