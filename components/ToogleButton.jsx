import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import SvgPauseButton from "../source/svg-images/SvgPauseButton";
import SvgPlayButton from "../source/svg-images/SvgPlayButton";

const ToogleButton = ({ handleTimer, timerState, timerValue }) => {
    // timerValue - значение таймера, будет равно 0 в конце работы таймера, при инвертировании мы получим корректное состояние кнопки
    // здесь не получится использовать глобальный стейт таймера, хоть это и логично, но стейт может измениться в состоянии паузы и кнопка станет неактивной
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        setIsActive(timerState);
    }, [timerState])
    const onPress = () => {
        handleTimer(isActive);
    }
    return(
        <TouchableOpacity onPress={ onPress } disabled={!timerValue}>
            {isActive ? <SvgPauseButton /> : <SvgPlayButton />}
        </TouchableOpacity>
    )
};

export default ToogleButton;