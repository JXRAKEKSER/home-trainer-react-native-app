import React, { useEffect, useState } from "react";
import {  TouchableOpacity, StyleSheet } from "react-native";

import SvgAddButton from "../source/svg-images/SvgAddButton";
import SvgTrashButton from "../source/svg-images/SvgTrashButton";


import { trainApi } from "../utils/TrainApi";

const HandleButton = ({trainId, initialAddedState, styleMix}) => {
    const [added, setAdded] = useState(initialAddedState);
    const mixedStyles = StyleSheet.compose({}, styleMix);
    useEffect(() => {
        setAdded(initialAddedState);
    }, [initialAddedState, trainId]);
    const handleChangeState = () => {
        if(added){
            trainApi.deleteTrain({trainId})
            .then(({id}) => {
                if(id){
                    setAdded(prev => !prev);
                }
            })
            .catch( error => console.log(error))
        }else{
            trainApi.addTrain({trainId})
            .then(({id}) => {
                
                if(id){
                    
                    setAdded(prev => !prev);
                }
            })
            .catch(error => console.log(error))
        }
    }
    return(
        <TouchableOpacity style={mixedStyles} onPress={handleChangeState}>
            {added ? <SvgTrashButton width={"30"} height={"30"}/> : <SvgAddButton width={"30"} height={"30"}/>}
        </TouchableOpacity>
    )
}

export default HandleButton;