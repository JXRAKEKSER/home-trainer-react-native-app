import React from "react";
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import ExerciseCard from "./components/ExerciseCard";

const mes = 'Train Screen';
const prmes = 'Press Me';
const Train = ({navigation, route}) => {
    const {train} = route.params;
    return(
        <View style={{alignItems:'center', justifyContent:'flex-start'}}>
            <Image source={{uri: train.image}} style={{width: '100%', height: 150}} />
            <Text>{train.title}</Text>
            <FlatList data={train.exercises} renderItem={ ({item}) => {
                return (<TouchableOpacity onPress={ () => navigation.navigate('Exercise', {exercise: item})}>
                            <ExerciseCard exercise={item} />
                        </TouchableOpacity>)
            }}
            keyExtractor={item => item._id} />
            <TouchableOpacity onPress={() => navigation.navigate('Exercise')}><Text>{prmes}</Text></TouchableOpacity>
        </View>
    )
}

export default Train;