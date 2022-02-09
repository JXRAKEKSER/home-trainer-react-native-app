import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native'
const ExerciseCard = ({exercise}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: exercise.previewImage}} style={styles.image} />
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{exercise.title}</Text>
                <Text style={styles.descriptionText}>{`Подходы ${exercise.approaches}`}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 30,
        flex: 1
    },
    title: {
        fontSize: 18,
        
    },
    descriptionContainer: {
        marginTop: 5,
        flex: 3
    },
    descriptionText: {
        fontSize: 15,
        fontWeight: '400'
    }
})

export default ExerciseCard;