import React from "react";
import { useContext } from "react";

import TrainsList from "../TrainsList";
import Header from "../Header";
import Train from "./Train";
import Exercise  from "./Exercise";
import TrainCard from "./components/TrainCard";
import HandleButton from '../HandleButton';
import TrainProcess from "../TrainProcessScreen/TrainProcess";

import { TrainsListContext } from "../../contexts/TrainsListContext";

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const TrainsStack = createNativeStackNavigator();

const Trains = () => {
    const { handleGetCommonDataTrains } = useContext(TrainsListContext);
    
    return(
        <>
            
            <TrainsStack.Navigator screenOptions={{headerShown: false}}>
                <TrainsStack.Screen name="TrainsList">
                    {(props) => <TrainsList {...props} listItem={TrainCard} CardButton={HandleButton} handleGetListData={handleGetCommonDataTrains}/>}
                </TrainsStack.Screen>
                <TrainsStack.Screen name="Train" component={Train} />
                <TrainsStack.Screen name="TrainProcess" component={TrainProcess} />
                <TrainsStack.Screen name="Exercise" component={Exercise} />
            </TrainsStack.Navigator>
        </>
        
        
    )
}


export default Trains;