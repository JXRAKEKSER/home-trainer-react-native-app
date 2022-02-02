import React from "react";

import TrainsList from "./TrainsList";
import Header from "../Header";
import Train from "./Train";
import Exercise  from "./Exercise";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const TrainsStack = createNativeStackNavigator();
const Trains = () => {
    
    return(
        <>
            <Header />
            <TrainsStack.Navigator screenOptions={{headerShown: false}}>
                <TrainsStack.Screen name="TrainsList" component={TrainsList}  />
                <TrainsStack.Screen name="Train" component={Train} />
                <TrainsStack.Screen name="Exercise" component={Exercise} />
            </TrainsStack.Navigator>
        </>
        
        
    )
}


export default Trains;