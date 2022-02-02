 import React, {useState} from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Input from "../Input";
 const SingUp = ({navigation}) => {

    const [formState, setFormState] = useState({username: '', password: ''});
    const handleChange = (val, name) => {
        setFormState({...formState, [name]: val})
    }

    const onSubmit = () => {
        api.login({username: formState.username, password: formState.password})
        .then( ({jwt}) => {
            console.log(jwt)
        })
        .catch( error => {
            console.log("error",error)
        })
    }

     return(
         <View>
            <Input onChangeHandler={handleChange} value={formState['username']} name={"username"} placeholder={'Username'}/>
            <Input onChangeHandler={handleChange}
             value={formState['password']} 
             name={"password"} 
             placeholder={'Password'}
             saveEdit={true}/>
            <Text>{formState.username}</Text>
            <Text>{formState.password}</Text>
            <Button onPress={onSubmit} title="Регистрация"/>
            <Button style={styles.redirect} onPress={() => navigation.navigate('Login')} title="Войти"/>
         </View>
     )
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


 export default SingUp;