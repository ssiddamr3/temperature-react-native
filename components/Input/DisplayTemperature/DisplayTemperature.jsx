import { Text, View } from "react-native";
import {s} from "./DisplayTemperature.style";

export default function DisplayTemperatue({temperature, unit}){
    return <Text style={s.temperatureTxt}>
        {temperature} {unit}
    </Text>
}