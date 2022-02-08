import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";


const TrainCard = ({imageLink, title, exerciseCount, trainId, added, HandleButton, handleDeleteUserTrain}) => {
    
    return(
        <View style={styles.container}>
            <Image source={{uri: imageLink}}
            style={styles.cardImage}/>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.exerciseCount}>{`Упражнений ${exerciseCount}`}</Text>
            </View>
            
            <HandleButton styleMix={{marginTop: 10, flex: 1}} trainId={trainId} initialAddedState={added} handleDeleteUserTrain={handleDeleteUserTrain}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: '#CCC',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10
    },
    cardImage: {
        marginRight: 30,
        width: 80,
        height: 80,
        borderRadius: 5,
        flex: 1
    },
    descriptionContainer: {
        marginTop: 10,
        marginRight: 30,
        flex: 2
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 18,
        
    },
    quantity: {
        fontSize: 18,
        fontWeight: "600",
        
    }
})

export default TrainCard;