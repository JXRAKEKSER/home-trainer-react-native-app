 import React, {useState} from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Form from "../Form";

import Input from "../Input";
import RedirectButton from "../RedirectButton";
import SubmitButton from "../SubmitButton";

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
    }
})


 export default SingUp;