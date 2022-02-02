import React from "react";
import {Button} from 'react-native'
const RemoveButton = ({trainId, handleDeleteUserTrain}) => {

    return(
        <Button title="Удалить" onPress={() => handleDeleteUserTrain(trainId)}/>
    )
}
export default RemoveButton;