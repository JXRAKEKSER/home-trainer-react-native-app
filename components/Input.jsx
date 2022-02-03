import React from "react";
import {TextInput, StyleSheet} from 'react-native'
const Input = ({onChangeHandler, value, name, placeholder, saveEdit, styleMix }) => {
    const inputMix = StyleSheet.compose(styles.input, styleMix);
    return(
        <TextInput placeholderTextColor={'#8b8a9c'} style={inputMix} onChangeText={(val) => onChangeHandler(val, name)} placeholder={placeholder} value={value} secureTextEntry={saveEdit}/>
    )
}

const styles = StyleSheet.create({
    input : {
        borderColor: '#f5f5f5',
        borderStyle: "solid",
        borderBottomWidth: 3,
        fontSize: 18,
        paddingBottom: 20,
        width: '100%',
        color: '#1a1a1a',
    }
})



export default Input;