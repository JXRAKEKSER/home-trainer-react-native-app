import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import ToogleButton from "./ToogleButton";

const Timer = ({ seconds, externalEvent }) => {
    const [counter, setCounter] = useState(seconds);
    // Этот стейт хранит ссылку на функцию интервала, чтобы удалить её и не оставлять затертой в памяти
    const [refInterval, setRefInterval] = useState(null);
    const [timerIsActive, setTimerIsActive] = useState(false);
    const startInterval = () => {
       return setInterval(() => {
           setCounter( prev => prev - 1);
       }, 1000);
    };
    const removeInterval = (interval) => {
        clearInterval(interval);
    };
    const handleTimer = (isActive) => {
        if (isActive && counter > 0) {
            removeInterval(refInterval);
            setTimerIsActive(!timerIsActive);
        } else if( !isActive && counter > 0) {
            setRefInterval(startInterval());
            setTimerIsActive(!timerIsActive);
        }
    }
    
    useEffect(() => {
        setCounter(seconds);
        setTimerIsActive(!timerIsActive);
        setRefInterval(startInterval());
    }, [externalEvent]);
    useEffect(() => {
        if (counter <= 0) {
            removeInterval(refInterval);
            setTimerIsActive(!timerIsActive);
            console.log('таймер отсановлен!');
        }
    }, [counter])

    return(
        <>
          <Text>{counter}</Text>
          <ToogleButton handleTimer={ handleTimer } timerState={ timerIsActive } timerValue={ counter }/>
        </>
    )
}

export default Timer;