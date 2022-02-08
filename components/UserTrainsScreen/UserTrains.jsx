import React, { useContext } from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { TrainsListContext } from "../../contexts/TrainsListContext";


import TrainsList from "../TrainsList";
import TrainCard from "../TrainsScreen/components/TrainCard";
import RemoveButton from "../RemoveButton";
import Train from "../TrainsScreen/Train";
import Exercise from "../TrainsScreen/Exercise";
import TrainProcess from "../TrainProcessScreen/TrainProcess";

const UserTrainsStack = createNativeStackNavigator();
const UserTrains = () => {
    const {handleGetUserTrains} = useContext(TrainsListContext);
    return(
        <>
        
        <UserTrainsStack.Navigator screenOptions={{headerShown: false}}>
            <UserTrainsStack.Screen name="UserTrainsList">
                {(props) => <TrainsList {...props} listItem={TrainCard} handleGetListData={handleGetUserTrains} CardButton={RemoveButton}/>}
            </UserTrainsStack.Screen>
            <UserTrainsStack.Screen name='Train' component={Train} />
            <UserTrainsStack.Screen name="TrainProcess" component={TrainProcess} />
            <UserTrainsStack.Screen name='Exercise' component={Exercise} />
        </UserTrainsStack.Navigator>
        </>
        
    )
}

export default UserTrains;