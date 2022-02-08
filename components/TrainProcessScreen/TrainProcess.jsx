import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button} from 'react-native';

import { addToTrainToHistory } from '../../utils/uiFeaters';
import { UserContext } from "../../contexts/UserContext";

import Timer from "../Timer";

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
        <View>
            <Text>{exercises[exerciseNumber].title}</Text>
            <Timer seconds={10} externalEvent={exerciseNumber}/>
            <Button onPress={handleNextExercise} title="Next"/>
        </View>
    )
};

export default TrainProcess;