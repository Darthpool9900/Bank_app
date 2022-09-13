import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {useFonts,Roboto_300Light} from '@expo-google-fonts/roboto';
import estilo from './Estilos/estilos'
import Loader from './Loader';
export default function Login({navigation}) {
  const[estado,setEstado]=useState('Inicio');
  const[user,setUser]=useState({
    'nome':'Rafael',
    'saldo':0.00,
    'fatura':0.00,
    'popanca':0.00,
    'cartao':'sicredi'
  })
  
  function validar(){

    while(user==''){
      return(
        <TextInput style={estilo.input} placeholder='Usuário:' placeholderTextColor='rgba(211, 211, 227,0.6)' onChangeText={(user)=>setUser(user)}></TextInput>
      )
    }
  }
    let [fontsLoaded] = useFonts({
      Roboto_300Light,
    });
  
    if(!fontsLoaded){
      return(<Loader></Loader>
              );
    }else{
      if(estado=='Inicio'){
        return (
          <View style={estilo.container}>
            <ImageBackground source={require('./assets/BackGround_login.jpg')} resizeMode="cover" style={estilo.back} imageStyle={{opacity:0.1}}>
            <View style={{marginTop:'30%',}}>
            <Text style={estilo.title}>Seja</Text>
            <Text style={estilo.title}>Bem vindo</Text>
            </View>
            <View style={estilo.login}>
              <TextInput style={estilo.input} placeholder='Usuário:' placeholderTextColor='rgba(211, 211, 227,0.6)' onChangeText={(user)=>setUser(user)} errorMessage={()=>validar()}></TextInput>
              <TextInput style={estilo.input} secureTextEntry={true} placeholder={'Senha:'} placeholderTextColor='rgba(211, 211, 227,0.6)' placholder></TextInput>
              <TouchableOpacity onPress={()=>navigation.navigate('Home',{nome:user,saldo:'0.00',fatura:'0.00',poupanca:'0.00',cartao:'sicredi'})} style={estilo.button}><Text style={estilo.t_button}>Entrar</Text></TouchableOpacity>
            </View>
            <StatusBar style="light" color="#d3d3e3"/>
            </ImageBackground>
          </View>
    );
        }
  }
  }