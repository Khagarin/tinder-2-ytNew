import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return ( 
        <View>
            <View style={{height: 40}}/>
            <Text style = {homeStyles.HeaderText}>HomeScreen!</Text>
            <View style={{height: 80}}/>
            <Button title = "Go to chat screen" onPress={() => navigation.navigate("Chat")}/>
        </View>
    )
}

export default HomeScreen

const homeStyles = StyleSheet.create({
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