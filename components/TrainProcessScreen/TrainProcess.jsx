import React, { useEffect, useState, useContext } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

import { addToTrainToHistory } from '../../utils/uiFeaters';
import { UserContext } from "../../contexts/UserContext";

import Timer from "../Timer";
import ExerciseCard from '../TrainsScreen/components/ExerciseCard'

const TrainProcess = ({route}) => {
    const userContext = useContext(UserContext);
    const {exercises, trainTitle, trainId} = route.params;
    const [exerciseNumber, setExerciseNumber] = useState(0);
    const handleNextExercise = () => {
        if (exerciseNumber < (exercises.length - 1)) {
            setExerciseNumber(prev => prev + 1);
        }
    }
    useEffect(async () => {
        if( exerciseNumber === exercises.length-1) {
            await addToTrainToHistory({_id: trainId, title: trainTitle});
            await userContext.handleTrainsHistory();
        }
    }, [exerciseNumber])
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                
                <ExerciseCard exercise={exercises[exerciseNumber]}/>
                <Timer seconds={10} externalEvent={exerciseNumber}/>
                <TouchableOpacity style={styles.nextOpacity} onPress={handleNextExercise}>
                    <Text style={styles.nextOpacityTitle}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    nextOpacity: {
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 60,
    },
    nextOpacityTitle: {
        fontSize: 24,
        fontWeight: '700',
        color:'#FFF'
    },
    textTitle: {
        fontSize: 24,
        
    },
    header: {
        alignSelf: 'flex-start',
        marginLeft: 20
    }
})
export default TrainProcess;