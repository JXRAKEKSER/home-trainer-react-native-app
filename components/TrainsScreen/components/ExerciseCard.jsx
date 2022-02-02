import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native'
const ExerciseCard = ({exercise}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: exercise.image}} style={styles.image} />
            <Text style={styles.title}>{exercise.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        padding: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5
    },
    title: {
        fontSize: 18
    }
})

export default ExerciseCard;