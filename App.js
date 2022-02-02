import {authApi} from './utils/AuthApi'
import {trainApi} from './utils/TrainApi';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Login from './components/LoginScreen/Login';
import SingUp from './components/SignUpScreen/SignUp';
import {AuthContext} from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import Home from './components/HomeScreen/Home';
import ProtectedNavigation from './components/ProtectedNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  
  const handleLogIn = () => {
    setAuthUser({...authUser, isLoged: true});
  }

  const handleLogOut = () => {
    
    //await AsyncStorage.removeItem('jwt');
    AsyncStorage.removeItem('jwt')
    .then( () => {
      setAuthUser({...authUser, isLoged: false});
    })
  }

  const handleUserName = (name) => {
    setUserName(name);
  }

  useEffect( async() => {
    try {
      
      const jwt = await AsyncStorage.getItem('jwt');
      if(jwt){
        
        trainApi.setToken(jwt);
        const {username} = await trainApi.getUserName();
        handleLogIn();
        handleUserName(username);
      }
    } catch (error) {
      console.log('ошибка')

    }
    
  }, [])
  
  const [authUser, setAuthUser] = useState({isLoged: false, handleLogIn: handleLogIn, handleLogOut: handleLogOut, handleUserName: handleUserName})
  const [userName, setUserName] = useState('');
  return (
    <AuthContext.Provider value={authUser}>
      <UserContext.Provider value={userName}>  
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
       </UserContext.Provider>
    </AuthContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});
