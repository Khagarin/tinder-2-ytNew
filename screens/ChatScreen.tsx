import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ChatScreen = () => {
    return ( 
        <View>
            <View style={{height: 40}}/>
            <Text style = {chatStyles.HeaderText}>This is the ChatScreen!</Text>
        </View>
    )
}

export default ChatScreen

const chatStyles = StyleSheet.create({
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