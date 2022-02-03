import React from "react";
import {TouchableOpacity} from 'react-native'

import SvgMoveButton from "../source/svg-images/SvgMoveButton";

const SubmitButton = ({handleSubmit}) => {
    return(
        <TouchableOpacity onPress={handleSubmit}>
            <SvgMoveButton width={"70"} height={"70"}/>
        </TouchableOpacity>
    )
}

export default SubmitButton;