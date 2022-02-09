import  React, {useCallback, useState, useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Text , ScrollView, RefreshControl} from "react-native";
import { trainApi } from '../utils/TrainApi';
import EmptyList from './EmptyList';



const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
const TrainsList = ({navigation, listItem: Card, CardButton, handleGetListData}) => {
    
    const [trainsList, setTrainsList] = useState([]);
    const [refresh, setRefreshing] = useState(false);
    
    const handleReferesh = useCallback(() => {
        setRefreshing(true);
        handleGetListData(setTrainsList);
         
        wait(2000).then( () => setRefreshing(false))
    }, [])
    const handleDeleteUserTrain = (trainId) => [
        trainApi.deleteTrain({trainId})
        .then(({id}) => {
            if(id){
                setTrainsList(prev => {
                   return prev.filter( trainCard => {
                        return trainCard._id !== id;
                    })
                })
            }
        })
    ]

    useEffect(() => {
        handleGetListData(setTrainsList);
    }, [])
    return(
        <View style={styles.container}>
            { }
            {trainsList.length === 0 ? (
                <ScrollView 
                    refreshControl={<RefreshControl onRefresh={handleReferesh} 
                    refreshing={refresh}/>}><EmptyList text={"Nothing to train"}/>
                </ScrollView>) : 
            (
                <FlatList data={trainsList} 
                renderItem={ ({item}) => {
                   return (
                    <TouchableOpacity onPress={() => navigation.navigate('Train', {train: item})}>
                        <Card 
                        imageLink={item.image} 
                        title={item.title} 
                        exerciseCount={item.exercises.length}
                        trainId={item._id}
                        added={item.added}
                        HandleButton={CardButton}
                        handleDeleteUserTrain={handleDeleteUserTrain}/>
                    </TouchableOpacity>
                   )
                }}  
                keyExtractor={item => item._id}
                onRefresh={handleReferesh}
                refreshing={refresh}/>  
            )}
            
        </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between'
    }
})

export default TrainsList;