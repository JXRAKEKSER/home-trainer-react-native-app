 import React, { useContext } from "react";
 import {View, Text, Button, StyleSheet, FlatList} from 'react-native'


import { UserContext } from "../../contexts/UserContext";
import { getGreeting } from "../../utils/uiFeaters";
import { trainApi } from "../../utils/TrainApi";
import RecentlyTrainCard from "./RecentlyTrainCard";
import EmptyList from "../EmptyList";

 const Home = ({navigation}) => {
    const userContext = useContext(UserContext);
    const handleNavigateToTrain = (id) => {
      trainApi.getTrainById(id)
      .then(({train}) => {
        // извлекается первый элемент массива, потому что была допущена ошибка на бэкенде
        // приходит массив, необходимо будет исправить
        navigation.navigate('Trains', {screen: 'Train', params: {train: train[0]}});
      })
      .catch(e => console.log(e));
    };
     return(
        <View style={styles.container}>
            
          <Text style={styles.greetingText}>{`${getGreeting()}, ${userContext.username}`}</Text>
          <View style={styles.trainHistoryContainer}>
            <Text style={styles.trainsHistoryTitle}>Your's train history</Text>
            {userContext.trainsHistory.length === 0 ? <EmptyList text={"It's empty( Let's train!"} /> : (
              <FlatList data={userContext.trainsHistory.trainsList} renderItem={ ({item}) => {
                return <RecentlyTrainCard train={item} handleNavigateToTrain={handleNavigateToTrain} styleMix={styles.trainsHistoryItemMix}/>
              }} keyExtractor={item => item._id}/>
            )
            }
            
          </View>
        </View>
     )
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'space-between'
    },
    greetingText: {
      fontSize: 32,
      fontWeight: '800',
      
    },
    trainHistoryContainer: {
      width: '95%',
      height: '30%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
	      height: 5,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 3,
      borderRadius: 10
    },
    trainsHistoryItemMix: {
      marginBottom: 5
    },
    trainsHistoryTitle: {
      marginBottom: 10,
      fontSize: 28,
      fontWeight: '700'
    }
  });

 export default Home;