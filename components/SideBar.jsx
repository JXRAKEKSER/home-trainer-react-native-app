import React from "react";
import {StyleSheet} from 'react-native'
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";

import SvgLogOutButton from "../source/svg-images/SvgLogOutButton";
const SideBar = ({handleLogOut, itemWidth, itemHeight}) => {
    return(
        <DrawerContentScrollView contentContainerStyle={styles.container}>
            <DrawerItem 
            label={'Log Out'}
            labelStyle={{fontSize: 18, fontWeight: "700"}}
            icon={() => <SvgLogOutButton width={itemWidth} height={itemHeight} />}
            onPress={handleLogOut}/>
        </DrawerContentScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FECE2E',
        height: '100%',
        justifyContent: 'flex-end'
    }
})
export default SideBar;