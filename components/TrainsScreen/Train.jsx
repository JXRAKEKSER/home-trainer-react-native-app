import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native'
import SvgPlayButton from "../../source/svg-images/SvgPlayButton";
import ExerciseCard from "./components/ExerciseCard";


const Train = ({navigation, route}) => {
    const {train} = route.params;
    
     
    return(
        <View style={{ width: '100%'}}>
            <ScrollView contentContainerStyle={{ justifyContent:'flex-start'}}>
                <Image source={{uri: train.image}} style={{width: '100%', height: 150}} />
                <Text style={styles.trainTitle}>{train.title}</Text>
                <View style={styles.exerciseContainer}>
                {train?.exercises.map( item => {
                    return (<TouchableOpacity onPress={ () => navigation.navigate('Exercise', {exercise: item})} key={item._id}>
                                <ExerciseCard exercise={item} />
                            </TouchableOpacity>)
                })}
                </View>
                
                <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('TrainProcess', {
                    exercises: train.exercises,
                    trainTitle: train.title,
                    trainId: train._id,
                    })}>
                    <Text style={styles.stratButtonText}>Start</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    trainTitle: {
        fontSize: 29,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 20,
    },
    exerciseContainer: {
        
    },
    startButton: {
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 60,
        alignSelf: 'center',
        marginTop: 30,
        
    },
    stratButtonText: {
        fontSize: 24,
        fontWeight: '700',
        color:'#FFF'
    }
})
export default Train;