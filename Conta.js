import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import { useState } from 'react';
import {useFonts,Roboto_300Light} from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import estilo from './Estilos/estilos'
import Loader from './Loader';



export default function Conta({route}) {
  const[estado,setEstado]=useState('Inicio');
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
  });

  if(!fontsLoaded){
    return(<Loader></Loader>)
  }else{
    return(
      <View style={estilo.container}>
        <TouchableOpacity style={estilo.btn_perfil} onPress={()=>navigation.goBack()}><Text style={estilo.txt}>➜</Text></TouchableOpacity>
        <ScrollView>
            <View style={estilo.perfilCaixa}>
              <View style={estilo.perfilPhoto}></View>
              <Text style={estilo.UserName}>{route.params?.nome}</Text>
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

