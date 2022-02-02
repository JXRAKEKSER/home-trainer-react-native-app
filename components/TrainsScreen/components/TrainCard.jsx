import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";


const TrainCard = ({imageLink, title, exerciseCount, trainId, added, HandleButton, handleDeleteUserTrain}) => {
    
    return(
        <View style={styles.container}>
            <Image source={{uri: imageLink}}
            style={{width: 80, height: 80, borderRadius: 5}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.exerciseCount}>{exerciseCount}</Text>
            
            <HandleButton trainId={trainId} initialAddedState={added} handleDeleteUserTrain={handleDeleteUserTrain}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%"
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 18
    },
    quantity: {
        fontSize: 18,
        fontWeight: "600",
        
    }
})

export default TrainCard;