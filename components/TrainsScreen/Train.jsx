import React from "react";
import {View, Text, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native'
import SvgPlayButton from "../../source/svg-images/SvgPlayButton";
import ExerciseCard from "./components/ExerciseCard";


const Train = ({navigation, route}) => {
    const {train} = route.params;
    
     
    return(
        <View style={{alignItems:'center', justifyContent:'flex-start'}}>
            <ScrollView contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
                <Image source={{uri: train.image}} style={{width: '100%', height: 150}} />
                <Text>{train.title}</Text>
                <View>
                {train?.exercises.map( item => {
                    return (<TouchableOpacity onPress={ () => navigation.navigate('Exercise', {exercise: item})} key={item._id}>
                                <ExerciseCard exercise={item} />
                            </TouchableOpacity>)
                })}
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('TrainProcess', {
                    exercises: train.exercises,
                    trainTitle: train.title,
                    trainId: train._id,
                    })}>
                    <SvgPlayButton />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Train;