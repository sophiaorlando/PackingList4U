import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import { useTheme } from '@react-navigation/native';



function CheckBoxCustom(props) {

  const [checked, toggleChecked] = useState(false)
  const { colors } = useTheme();


  // console.log(props)
  return (
    <CheckBox
      title={props.title}
      textStyle={props.textStyle}
      checked={checked}
      onPress={() => toggleChecked(!checked)}
      containerStyle={{ backgroundColor: colors.card }}

    />
  )
}

export default CheckBoxCustom
