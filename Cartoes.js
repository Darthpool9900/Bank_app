import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { useState } from 'react';
import {useFonts,Roboto_300Light} from '@expo-google-fonts/roboto';
import {useNavigation} from '@react-navigation/native';
import estilo from './Estilos/estilos'
import Cartao from './Cartao';

export default function Cartoes({route}){
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
            <View style={estilo.card_sel}>
                <Text style={estilo.cardInfo}>Selecione o cartão</Text>
                <Cartao></Cartao>
            </View>
            <View>
            <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Solicitar novo Cartão                  ➜</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Ativar Cartão                                ➜</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Cancelar Cartão                           ➜</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.verConta}><Text style={estilo.conta_entrar}>Consultar Status do cartão       ➜</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.verConta} onPress={()=>navigation.navigate('Fatura')}><Text style={estilo.conta_entrar}>Pagar Fatura                                ➜</Text></TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        <StatusBar style="light" color="#d3d3e3"/>
        </View>
    )
      }
}