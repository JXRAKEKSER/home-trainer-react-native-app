import React, {useContext} from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext } from "../contexts/AuthContext";


import Home from "./HomeScreen/Home";
import Trains from "./TrainsScreen/Trains";
import UserTrains from './UserTrainsScreen/UserTrains'
import SideBar from "./SideBar";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ProtectedNavigation = () => {
    const authUserContext = useContext(AuthContext);
    const onHandleLogOut = () => {
        authUserContext.handleLogOut();
    }
    return(
        <>
        
        <Drawer.Navigator drawerContent={(props) => <SideBar {...props} handleLogOut={onHandleLogOut} itemHeight={"40"} itemWidth={"30"} />}>
            <Drawer.Screen name="HomeDrawer" options={{title: ''}}>
                {() => { return(
                     <Tab.Navigator screenOptions={{headerShown: false}} backBehavior="order">
                    <Tab.Screen name={'Home'} component={Home} />
                    <Tab.Screen name={'UserTrains'} component={UserTrains} />
                    <Tab.Screen name={'Trains'} component={Trains}/>
                </Tab.Navigator>)
                }}
            </Drawer.Screen>
        
        </Drawer.Navigator>
        </>
    );
}



export default ProtectedNavigation;