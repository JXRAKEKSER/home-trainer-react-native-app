 import React, {useContext} from "react";
import {AuthContext} from '../../contexts/AuthContext';
import { UserContext } from "../../contexts/UserContext";
import {View, Text, Button, StyleSheet} from 'react-native'
import { getGreeting } from "../../utils/uiFeaters";
 const Home = ({navigation}) => {
    const authUserContext = useContext(AuthContext);
    const userContext = useContext(UserContext)
    const onHandleLogOut = () => {
        authUserContext.handleLogOut();
    }
     return(
        <View style={styles.container}>
            <Text style={styles.text}>{`${getGreeting()}, ${userContext}`}</Text>
            <Button onPress={onHandleLogOut} title='Выйти'/>
        </View>
     )
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

 export default Home;