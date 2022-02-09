import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import SvgListMarker from '../../source/svg-images/SvgListMarker';

const Exercise = ({route}) => {
    const {exercise} = route.params;
    return(
        <ScrollView contentContainerStyle={{}}>
            <Image source={{uri: exercise.exampleImage}} style={styles.image} />
            <Text style={styles.exerciseTitle}>{exercise.title}</Text> 
            <View style={styles.exerciseDescription}>
                {exercise.description.map( (listItem, index) => {
                    return (<View style={styles.listItem} key={index.toString()}>
                                <SvgListMarker value={index} styleMix={{flex: 1, marginRight: 5}}/>
                                <Text style={styles.listItemText}>{listItem}</Text>
                            </View>)
                })}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    image: {
       width: '100%',
       height: 400
    },
    exerciseTitle: {
        fontSize: 29,
        fontWeight: '700',
        marginBottom: 20,
    },
    exerciseDescription: {
        marginTop: 10,
    },
    exerciseApproches: {
        fontSize: 18,
        fontWeight: '700'
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
    },
    listItemText: {
        fontSize: 15,
        flex: 1
    }
});
export default Exercise;