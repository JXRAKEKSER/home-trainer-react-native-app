import React from "react";
import {View, Text} from 'react-native'
const Exercise = ({route}) => {
    const {exercise} = route.params;
    return(
        <View styles={{alignItems:'center', justifyContent:'center'}}>
            <Text>{exercise.title}</Text>
        </View>
    )
}
export default Exercise;