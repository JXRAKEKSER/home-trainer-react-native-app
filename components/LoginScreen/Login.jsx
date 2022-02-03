import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button  } from 'react-native'

import AsyncStorage from "@react-native-async-storage/async-storage";
import {authApi} from '../../utils/AuthApi';
import { trainApi } from "../../utils/TrainApi";
import {AuthContext} from '../../contexts/AuthContext';

import Input from "../Input";
import RedirectButton from "../RedirectButton";
import Form from "../Form";
import SubmitButton from "../SubmitButton";


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
            <Form>
                <Text style={styles.title}>Welcome Back!</Text>
                <Input onChangeHandler={handleChange} 
                    value={formState['username']} 
                    name={"username"} 
                    placeholder={'Username'} 
                    styleMix={styles.input}/>
                <Input onChangeHandler={handleChange}
                    value={formState['password']} 
                    name={"password"} 
                    placeholder={'Password'}
                    saveEdit={true}
                    styleMix={styles.input}/>
                <View style={styles.submitButtonContainer}>
                    <Text style={styles.submitButtonText}>Sign In</Text>
                    <SubmitButton handleSubmit={onSubmit} />
                </View>
                <RedirectButton styleMix={{marginTop: 40}} title={"Sign Up"} nextScreen={"SignUp"} navigation={navigation}/>
            </Form>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems:'center',
        paddingTop: 150,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign:'left',
        width: '90%',
        marginBottom: 40,
    },
    formContainer: {
        width: '90%',
    },
    input: {
        marginBottom: 40
    },
    submitButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    submitButtonText: {
        fontSize: 32,
        fontWeight: 'bold'
    }
})

export default Login;