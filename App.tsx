import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        {/* Passes down the cool auth stuff to children */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
/*
const styles = StyleSheet.create({
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
});

*/

/*
<View style={styles.container}>
      <Text style = {styles.infoText}>Hello user!</Text>
      <Button title = "click me to go to the home screen"/>
      <StatusBar style="auto" />
    </View>
*/