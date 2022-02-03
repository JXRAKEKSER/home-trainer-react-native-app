import React from "react";
import { View, StyleSheet } from "react-native";

const Form = ({children}) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         width: '90%'
    }
});

export default Form;