import AsyncStorage from '@react-native-async-storage/async-storage';
export const getGreeting = () => {
    const date = new Date();
    
    if(date.getHours() < 5){
        return 'Good nigth'
    }else if(date.getHours() >= 5 && date.getHours() < 12 ){
        return 'Good morning'
    }else if(date.getHours() >= 12 && date.getHours() < 18){
        return 'Hello'
    }else if(date.getHours() >= 18){
        return 'Good evening'
    }
};

export const addToTrainToHistory = async (train) => {
    const trainsHistory = await AsyncStorage.getItem('trainsHistory');
    try {
        if(trainsHistory){
            const trainsHistoryObj = JSON.parse(trainsHistory);
            const alreadyExistTrain = trainsHistoryObj.trainsList.findIndex( trainItem => {
                return trainItem._id === train._id;
            });
            if (alreadyExistTrain !== -1){
                if ( alreadyExistTrain === 0) {
                    return;
                }
                trainsHistoryObj.trainsList.splice(alreadyExistTrain, 1);
                trainsHistoryObj.trainsList.unshift(train);
                console.log('obj', trainsHistoryObj)
                await AsyncStorage.setItem('trainsHistory', JSON.stringify(trainsHistoryObj));
                return;
            }
            if (trainsHistoryObj.trainsList === 3) {
                trainsHistoryObj.trainsList.pop();
                trainsHistoryObj.trainsList.unshift(train);
                await AsyncStorage.setItem('trainsHistory', JSON.stringify(trainsHistoryObj));
                return;
            }
            trainsHistoryObj.trainsList.unshift(train);
            await AsyncStorage.setItem('trainsHistory', JSON.stringify(trainsHistoryObj));
            return;
            
        }
        const trainsHistoryObj = {
            trainsList:[train]
        };
        await AsyncStorage.setItem('trainsHistory', JSON.stringify(trainsHistoryObj));
        
    } catch (e) {
        console.log(e);
    }
};