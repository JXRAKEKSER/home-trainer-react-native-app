import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RedirectButton = ({navigation, title, nextScreen, styleMix}) => {
    
    return(
        <TouchableOpacity style={styleMix} onPress={() => navigation.navigate(nextScreen)}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: '500',
        color:'#696a6f',
        textDecorationLine: 'underline'
    },
    
});
export default RedirectButton;