import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./HomeScreen/Home";
import Trains from "./TrainsScreen/Trains";
import UserTrains from './UserTrainsScreen/UserTrains'
import Header from "./Header";
const Tab = createBottomTabNavigator();
const ProtectedNavigation = () => {
    return(
        <>
        <Header />
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={'Home'} component={Home} />
            <Tab.Screen name={'UserTrains'} component={UserTrains} />
            <Tab.Screen name={'Trains'} component={Trains}/>
        </Tab.Navigator>
        </>
    );
}

export default ProtectedNavigation;