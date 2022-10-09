import { useState } from 'react'
import { Text, TextInput, Pressable, ScrollView, } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import { BasicStyle,  DarkStyle } from './Styles'

export default function App () {

  const isBasic = false;
  const theme = isBasic ? DarkStyle : BasicStyle;

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState(genders[0].value)
  const [result, setResult] = useState(0)


  function calculate(){
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - burning * hours
    const res = gender === 'male' ? (gramsLeft) / (weight * 0.7) : (gramsLeft) / (weight * 0.6);
    setResult(res);
  }

  return (
    <ScrollView style={theme.container}>
      
      
      <Text style={theme.label}>Weight</Text>
      <TextInput
      style={theme.field}
        onChangeText={text => setWeight(text)}
        keyboardType={'number-pad'}
      />

      <Text style={theme.label}>Bottles</Text>
      <TextInput
      style={theme.field}
        onChangeText={text => setBottles(text)}
        keyboardType={'number-pad'}
      />

      <Text style={theme.label}>Hours</Text>
      <TextInput
      style={theme.field}
        onChangeText={text => setHours(text)}
        keyboardType={'number-pad'}
      />

      <RadioForm 
        style={theme.radio}
        radio_props={genders}
        initial={0}
        onPress={value => setGender(value)}
        buttonColor={'#FBC656'}
        selectedButtonColor={'#FA9709'}
        buttonSize={25}
        buttonOuterSize={40}
        labelStyle={{fontSize: 20}}
      />

      <Text style={theme.label}>{result.toFixed(2)}</Text>

      <Pressable style={theme.button} onPress={calculate}>
      <Text style={theme.text}>Calculate</Text>
      </Pressable>
    </ScrollView>
  )
};