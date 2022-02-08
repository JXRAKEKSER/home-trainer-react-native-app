import React, {useState, useContext} from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";

import { authApi } from "../../utils/AuthApi";
import { LoadingContext } from "../../contexts/LoadingContext";

import Form from "../Form";
import Input from "../Input";
import RedirectButton from "../RedirectButton";
import SubmitButton from "../SubmitButton";
import Loader from "../Loader";

 const SingUp = ({navigation}) => {
    const loadingContext = useContext(LoadingContext);
    const [formState, setFormState] = useState({username: '', password: ''});
    const handleChange = (val, name) => {
        setFormState({...formState, [name]: val})
    }

    const onSubmit = () => {
        loadingContext.handleLoading(true);
        authApi.registration({username: formState.username, password: formState.password})
        .finally( () => loadingContext.handleLoading(false))
        .then( ({message}) => {
            
            ToastAndroid.show(message, ToastAndroid.SHORT);
        })
        .catch( error => {
            console.log("error",error);
            
            ToastAndroid.show(error, ToastAndroid.SHORT);
        });
    }

     return(
         <>
         {loadingContext.isLoading ? (
             <View style={styles.loaderContainer}>
                 <Loader />
             </View>
         ) : (
            <View style={styles.container}>
             <Form>
                <Text style={styles.title}>Let's Start</Text>
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
                    <Text style={styles.submitButtonText}>Sign Up</Text>
                    <SubmitButton handleSubmit={onSubmit} />
                </View>
                <RedirectButton styleMix={{marginTop: 40}} title={"Sign In"} nextScreen={"Login"} navigation={navigation}/>
             </Form>
         </View>
         )}
         </>
     )
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
    },
    loaderContainer: {
        paddingTop: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


 export default SingUp;