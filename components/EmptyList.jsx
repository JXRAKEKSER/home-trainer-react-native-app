import React from "react";
import { View, StyleSheet, Text } from "react-native";

const EmptyList = ({text}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    }
});

export default EmptyList;