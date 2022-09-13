import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { useState } from 'react';
import {useFonts,Roboto_300Light} from '@expo-google-fonts/roboto';
import estilo from './Estilos/estilos';
import { useNavigation } from '@react-navigation/native';
import Loader from './Loader';



export default function Fatura({route}){
    const navigation = useNavigation();
    const heightW = route.params?.fatura
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
            <View style={estilo.graph}>
                <Text style={estilo.title_info_graph}>Gastos do ano</Text>
                <View style={estilo.grafico}>
                <View style ={{width:50,height:'30%',backgroundColor:'#d3d3e3',position:'absolute',left:'20%',bottom:0,borderTopLeftRadius:10,borderTopRightRadius:10}}></View>
                    <View style ={{width:50,height:'80%',backgroundColor:'#d3d3e3',position:'absolute',left:'50%',bottom:0,borderTopLeftRadius:10,borderTopRightRadius:10}}></View>
                </View>
                
            </View>
            <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Pagar com boleto                        ➜</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Pagar com pix                              ➜</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Pagar com cartão                        ➜</Text></TouchableOpacity>
            </View>
            </ScrollView>
        <StatusBar style="light" color="#d3d3e3"/>
        </View>
    )
}
}