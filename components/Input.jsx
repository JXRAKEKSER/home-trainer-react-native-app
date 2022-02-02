import React from "react";
import {TextInput, StyleSheet} from 'react-native'
const Input = ({onChangeHandler, value, name, placeholder, saveEdit }) => {
   
    return(
        <TextInput style={styles.signin__input} onChangeText={(val) => onChangeHandler(val, name)} placeholder={placeholder} value={value} secureTextEntry={saveEdit}/>
    )
}

const styles = StyleSheet.create({
    signin__input : {
        borderColor: '#CCC',
        borderStyle: "solid",
        borderWidth: 2,
        marginTop: 10
    }
})

export default Input;