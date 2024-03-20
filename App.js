import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {s} from './App.style';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import hotBackground from './assets/hot (3).png';
import coldBackground from './assets/cold (3).png';
import { Input } from './components/Input/Input';
import { useEffect, useState } from 'react';
import DisplayTemperature from './components/Input/DisplayTemperature/DisplayTemperature';
import { convertTempTo, UNITS, getOppUnit, isIceTemp } from './utils/temperature';
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert';


export default function App() {
  const [input,setInput] = useState(0);
  const[currentUnit,setCurrentUnit] = useState("C");
  const[currentBackground,setCurrentBackground] = useState(coldBackground);
  let oppUnit = getOppUnit(currentUnit);

  useEffect(() => {
    if (isIceTemp(input, currentUnit)) {
      setCurrentBackground(coldBackground);
    } else {
      setCurrentBackground(hotBackground);
    }
  }, [input, currentUnit]);
  

  function getConvertedTemp(){
    if(isNaN(input)){
      return ""
    }else{
      return convertTempTo(input, getOppUnit(currentUnit)).toFixed(1)
    }
  }
  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
    <View style={s.workspace}>
      <DisplayTemperature unit={oppUnit} temperature={getConvertedTemp()}/>
      <Input unit={currentUnit} onChange={setInput} defaultValue={0}/>
      <ButtonConvert onPress ={()=>setCurrentUnit(oppUnit)} unit={currentUnit}/>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}

