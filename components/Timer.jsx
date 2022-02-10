import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
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
        if( refInterval === null){
            setCounter(seconds);
            setTimerIsActive(true);
            setRefInterval(startInterval());
        }else {
            removeInterval(refInterval);
            setCounter(seconds);
            setTimerIsActive(true);
            setRefInterval(startInterval());
        }
        
    }, [externalEvent]);
    useEffect(() => {
        if (counter <= 0) {
            removeInterval(refInterval);
            setTimerIsActive(!timerIsActive);
            console.log('таймер отсановлен!');
        }
    }, [counter])

    return(
        <View style={styles.container}>
            <Text style={styles.counter}>{counter}</Text>
            <ToogleButton handleTimer={ handleTimer } timerState={ timerIsActive } timerValue={ counter }/>
        </View>
    )
}
const styles = StyleSheet.create({
    counter: {
        fontSize: 56,
        fontWeight: '900',
        padding: 30
    },
    container: {
        alignItems: 'center',
        height: 300
    }
})
export default Timer;