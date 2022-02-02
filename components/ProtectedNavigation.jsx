import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./HomeScreen/Home";
import Trains from "./TrainsScreen/Trains";
const Tab = createBottomTabNavigator();
const ProtectedNavigation = () => {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={'Home'} component={Home} />
            
            <Tab.Screen name={'Trains'} component={Trains}/>
        </Tab.Navigator>
    );
}

export default ProtectedNavigation;