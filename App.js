import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {useFonts,Roboto_300Light} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Conta from './Conta';
import estilo from './Estilos/estilos'
import Loader from './Loader';
import Fatura from './Fatura';
import Login from './Login';


export default function App() {
  const Stack = createNativeStackNavigator();
  
    const[user,setUser]=useState({
    'nome':'Rafael',
    'saldo':0.00,
    'fatura':0.00,
    'popanca':0.00,
    'cartao':'sicredi'
  })




 return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} initialParams={user}>
      </Stack.Screen>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} initialParams={user}></Stack.Screen>
      <Stack.Screen name="Conta" component={Conta} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="Fatura" component={Fatura} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
 )

}

