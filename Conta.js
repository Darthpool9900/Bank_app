import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import { useState } from 'react';
import {useFonts,Roboto_300Light} from '@expo-google-fonts/roboto';
import estilo from './Estilos/estilos'
import Home from './Home';
import Loader from './Loader';



export default function Conta({navigation}) {
  const[estado,setEstado]=useState('Inicio');
  
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
  });

  if(!fontsLoaded){
    return(<Loader></Loader>)
  }else{
    return(
      <View style={estilo.container}>
        <TouchableOpacity style={estilo.btn_perfil} onPress={()=>navigation.goBack('Home')}><Text style={estilo.txt}>➜</Text></TouchableOpacity>
        <ScrollView>
            <View style={estilo.perfilCaixa}>
              <View style={estilo.perfilPhoto}></View>
              <Text style={estilo.UserName}>{}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Conta corrente                              ➜</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Poupança                                      ➜</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Configurações                              ➜</Text></TouchableOpacity>
            </View>
        </ScrollView>
        <StatusBar style="light" color="#d3d3e3"/>
        </View>
        )
    }
}

