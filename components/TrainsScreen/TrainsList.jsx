import  React, {useCallback, useState, useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { trainApi } from "../../utils/TrainApi";
import TrainCard from './components/TrainCard';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
const TrainsList = ({navigation}) => {
    const [trainsList, setTrainsList] = useState([]);
    const [refresh, setRefreshing] = useState(false);
   /* const getTrainsList = () => {
        trainApi.getTrains()
        .then(({trains}) => {
            setTrainsList(trains)
        })
        .catch( error => {
            console.log(error)
        })
    }*/
    const getCommonDataTrains = () => {
        Promise.all([trainApi.getTrains(), trainApi.getUserTrains()])
        .then(responseArray => {
            const userTrains = responseArray[1].trainsList || [];
            const allTrains = responseArray[0].trains;
            if(userTrains.length){
                userTrains.forEach( userTrain => {
                    for(let i = allTrains.length-1; i>=0; i--){
                        if(userTrain._id === allTrains[i]._id){
                            allTrains[i].added = true;
                        }
                    }
                });
            }
            setTrainsList(allTrains);
        })
        .catch( error => console.log(error))

    }

    const handleReferesh = useCallback(() => {
        setRefreshing(true);
        getCommonDataTrains();
         
        wait(2000).then( () => setRefreshing(false))
    }, [])

    useEffect(() => {
        //getTrainsList();
        getCommonDataTrains();
    }, [])
    return(
        <View style={styles.container}>
            
            <FlatList data={trainsList} 
            renderItem={ ({item}) => {
               return (
                <TouchableOpacity onPress={() => navigation.navigate('Train', {train: item})}>
                    <TrainCard 
                    imageLink={item.image} 
                    title={item.title} 
                    exerciseCount={item.exercises.length}
                    trainId={item._id}
                    added={item.added}/>
                </TouchableOpacity>
               )
            }}  
            keyExtractor={item => item._id}
            onRefresh={handleReferesh}
            refreshing={refresh}/>  
        </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TrainsList;