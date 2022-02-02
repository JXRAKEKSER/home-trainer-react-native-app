import React, { useEffect, useState } from "react";
import {  TouchableOpacity, Image, View } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import SvgAddButton from '../source/svg-images/addButton.svg'
import { trainApi } from "../utils/TrainApi";

const HandleButton = ({trainId, initialAddedState}) => {
    const [added, setAdded] = useState(initialAddedState);
    
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
        <TouchableOpacity onPress={handleChangeState}>
            <Image source={{uri: added ? 'https://image.shutterstock.com/image-vector/simple-flat-modern-clean-stop-600w-1720139440.jpg' : 'https://image.shutterstock.com/image-vector/add-icon-new-item-plus-600w-1315566653.jpg'}} style={{height: 30, width: 30}} />
        </TouchableOpacity>
    )
}

export default HandleButton;