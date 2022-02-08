
import {trainApi} from './utils/TrainApi';
import { ToastAndroid, StyleSheet, View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Login from './components/LoginScreen/Login';
import SingUp from './components/SignUpScreen/SignUp';
import {AuthContext} from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import { TrainsListContext } from './contexts/TrainsListContext';
import { LoadingContext } from './contexts/LoadingContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import 'react-native-gesture-handler';

import ProtectedNavigation from './components/ProtectedNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  
  const handleLogIn = () => {
    setAuthUser({...authUser, isLoged: true});
  };

  const handleLogOut = () => {
    
    AsyncStorage.removeItem('trainsHistory').catch( e => console.log(e));
    AsyncStorage.removeItem('jwt')
    .then( () => {
      setAuthUser({...authUser, isLoged: false});
    })
  };

  const handleUserName = (name) => {
    setUserData( prev => ({...prev, username: name}));
  };

  const handleTrainsHistory = async () => {
    try {
      const trainsHistory = await AsyncStorage.getItem('trainsHistory');
      if (trainsHistory) {
        console.log(trainsHistory);
        setUserData(prev =>  ({...prev, trainsHistory: JSON.parse(trainsHistory)}));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetCommonDataTrains = (setListState) => {
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
            setListState(allTrains);
        })
        .catch( error => console.log(error))
  };

  const handleGetUserTrains = (setListState) => {
    trainApi.getUserTrains()
    .then( ({trainsList}) => {
      if(trainsList){
        setListState(trainsList);
      }
    })
    .catch( error => console.log(error))
  };
  const handleLoading = (isLoading) => {
    setLoading({...loading, isLoading});
  };

  useEffect( async() => {
    try {
      
      const jwt = await AsyncStorage.getItem('jwt');
      if(jwt){
        handleLoading(true);
        trainApi.setToken(jwt);
        const {username} = await trainApi.getUserName();
        handleLogIn();
        handleUserName(username);
        handleTrainsHistory();
        handleLoading(false);
      }
    } catch (error) {
      handleLoading(false);
      ToastAndroid.show(error, ToastAndroid.LONG);
      console.log('ошибка')

    }
    
  }, [])
  
  const [authUser, setAuthUser] = useState({isLoged: false, handleLogIn: handleLogIn, handleLogOut: handleLogOut, handleUserName: handleUserName});
  const [loading, setLoading] = useState({ isLoading: false, handleLoading: handleLoading});
  const listHandlers = { handleGetCommonDataTrains, handleGetUserTrains};
  const [userData, setUserData] = useState({ username: '', trainsHistory: [], handleTrainsHistory: handleTrainsHistory});
  return (
    <AuthContext.Provider value={authUser}>
      <UserContext.Provider value={userData}>
        <TrainsListContext.Provider value={listHandlers}>  
          <LoadingContext.Provider value={loading}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                {authUser.isLoged ? (
                  
                  <Stack.Screen name='ProtectedNav' component={ProtectedNavigation} />
                ):(
                <>  
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='SignUp' component={SingUp} />
                </>
                )}
                </Stack.Navigator>
            </NavigationContainer>
          </LoadingContext.Provider>
        </TrainsListContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
