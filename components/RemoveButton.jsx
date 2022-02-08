import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native'
import SvgTrashButton from "../source/svg-images/SvgTrashButton";
const RemoveButton = ({trainId, handleDeleteUserTrain, styleMix}) => {
    const mixedStyles = StyleSheet.compose({}, styleMix);
    return(
        <TouchableOpacity style={mixedStyles} onPress={() => handleDeleteUserTrain(trainId)}>
            <SvgTrashButton />
        </TouchableOpacity>
    )
}
export default RemoveButton;