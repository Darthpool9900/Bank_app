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
export default function Login({navigation}) {
  const[estado,setEstado]=useState('Inicio');
  
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
            <ImageBackground source={require('../Bank_clone/assets/BackGround_login.jpg')} resizeMode="cover" style={estilo.back} imageStyle={{opacity:0.1}}>
            <View style={{marginTop:'30%',}}>
            <Text style={estilo.title}>Seja</Text>
            <Text style={estilo.title}>Bem vindo</Text>
            </View>
            <View style={estilo.login}>
              <TextInput style={estilo.input} placeholder='Usuário:' placeholderTextColor='rgba(211, 211, 227,0.6)'></TextInput>
              <TextInput style={estilo.input} secureTextEntry={true} placeholder={'Senha:'} placeholderTextColor='rgba(211, 211, 227,0.6)' placholder></TextInput>
              <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={estilo.button}><Text style={estilo.t_button}>Entrar</Text></TouchableOpacity>
            </View>
            <StatusBar style="light" color="#d3d3e3"/>
            </ImageBackground>
          </View>
    );
    }else if(estado=='Logar'){
      return(<Home estate={estado} user={user} setEstado={setEstado} setUser={setUser}/>)
    }else if(estado=='conta'){
      return(<Conta estate={estado} user={user} setEstado={setEstado} setUser={setUser}></Conta>)
    }else if(estado=='fatura'){
      return(
        <Fatura></Fatura>
      )
    }
  }
  }