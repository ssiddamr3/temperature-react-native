import { Text,View, TextInput } from "react-native";
import {s} from './Input.style';

export function Input({defaultValue,onChange, unit}){
    return <View style={s.root}>
        <TextInput maxLength ={3} 
        style={s.input}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={(text)=>{
            onChange(text)
        }}/>
        <Text style={s.unit}>{unit}</Text>
    </View>
}