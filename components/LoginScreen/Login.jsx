import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button  } from 'react-native'

import AsyncStorage from "@react-native-async-storage/async-storage";
import {authApi} from '../../utils/AuthApi';
import { trainApi } from "../../utils/TrainApi";
import {AuthContext} from '../../contexts/AuthContext';

import Input from "../Input";
import RedirectButton from "../RedirectButton";


const Login = ({navigation}) => {
    const authUserContext = useContext(AuthContext)
    const [formState, setFormState] = useState({username: '', password: ''});
    const handleChange = (val, name) => {
        setFormState({...formState, [name]: val})
    }

    const  onSubmit = async () => {
        try {
            const {jwt} = await authApi.login({username: formState.username, password: formState.password});
            
            authUserContext.handleUserName(formState.username);
            if(jwt){
               await AsyncStorage.setItem('jwt', jwt);
               trainApi.setToken(jwt);
               authUserContext.handleLogIn();
            }
        } catch (error) {
            console.log('Ошибка',error)
        }
    }
  
    return(
        <View style={styles.container}>
            <Input onChangeHandler={handleChange} value={formState['username']} name={"username"} placeholder={'Username'}/>
            <Input onChangeHandler={handleChange}
             value={formState['password']} 
             name={"password"} 
             placeholder={'Password'}
             saveEdit={true}/>
            <Text>{formState.username}</Text>
            <Text>{formState.password}</Text>
            <Button onPress={onSubmit} title="Вход"/>
            <RedirectButton style={styles.redirect} title={"Регистрация"} nextScreen={"SignUp"} navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    redirect: {
        marginTop: 10
    }
})

export default Login;