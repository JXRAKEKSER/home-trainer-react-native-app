import React from "react";
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native'
import SvgRecentlyTrain from "../../source/svg-images/SvgRecentlyTrain";

const RecentlyTrainCard = ({train, handleNavigateToTrain, styleMix}) => {
    const cardContainerMix = StyleSheet.compose(styles.cardContainer, styleMix);
    return(
        <TouchableOpacity style={cardContainerMix} onPress={() => handleNavigateToTrain(train._id)}>
            <View style={styles.icon}>
            <SvgRecentlyTrain />
            </View>
            <Text style={styles.cardTitle}>{train.title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        height: 60,
        fontSize: 24,
        fontWeight: '500',
        alignItems: 'center',
        borderWidth: 0,
        backgroundColor: '#000',
        borderRadius: 5,
        width: '99%'
    },
    icon: {
        height: 50,
        width: 50,
        marginRight: 30
    },
    cardTitle: {
        color: '#FFF',

    }
});

export default RecentlyTrainCard;