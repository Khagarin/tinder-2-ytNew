import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
    const { user } = useAuth()
    const navigation = useNavigation();

    console.log(user);
    return ( 
        <View>
            <View style={{height: 40}}/>
            <Text style = {LoginStyles.HeaderText}>Login & Sign Up</Text>
            <View style={{height: 80}}/>
            
        </View>
    )
}


















export default LoginScreen

const LoginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoText: {
      fontSize: 20,
      fontWeight: "500",
      color: "black",
      alignSelf: "center"
    },
    HeaderText: {
      fontSize: 25,
      fontWeight: "700",
      color: "brown",
      alignSelf: "center"
      
    }
});

/*
<Button title = "Go to chat screen" />
*/