import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import { useState } from 'react';
import {useFonts,Roboto_300Light} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cartao from './Cartao';
import estilo from './Estilos/estilos'
import Loader from './Loader';



export default function Home({navigation},props){


    let [fontsLoaded] = useFonts({
        Roboto_300Light,
      });
if(!fontsLoaded){
    return(<Loader></Loader>)
}else{

    return(
        <ScrollView style={estilo.container}>
        <View style={estilo.card_user}>
            <Text style={estilo.title_info}>Olá {'\n'}{this.props.nome}</Text>
            <View style={estilo.money}>
                <Text style={estilo.saldo}>Saldo atual:</Text>
                <Text style={estilo.saldo_value}>R${props.saldo}</Text>
            </View>
            <TouchableOpacity style={estilo.btn} onPress={()=>navigation.navigate('Conta')}><Text style={estilo.buton}>Ver detalhes</Text></TouchableOpacity>
        </View>
        <View style={estilo.fatura}>
            <View>
            <Text style={estilo.mov_text}>Movimentações</Text>
            </View>
            <View style={estilo.bloco}>
                <Text style={{fontSize:18,fontFamily:'Roboto_300Light',color:'#d3d3e3'}}>08/09/2022</Text>
                <Text style={{fontSize:18,fontFamily:'Roboto_300Light',color:'#d3d3e3'}}>Restaurante:Churrascaria Ltda.</Text>
                <Text style={{fontSize:24,fontFamily:'Roboto_300Light',color:'#d3d3e3'}}>Valor:R$24,50</Text>
            </View>
            <View style={estilo.bloco}>
                <Text style={{fontSize:18,fontFamily:'Roboto_300Light',color:'#d3d3e3'}}>11/06/2022</Text>
                <Text style={{fontSize:18,fontFamily:'Roboto_300Light',color:'#d3d3e3'}}>GameStop</Text>
                <Text style={{fontSize:24,fontFamily:'Roboto_300Light',color:'#d3d3e3'}}>Valor:R$249,99</Text>
            </View>
            <TouchableOpacity style={estilo.btn} onPress={()=>navigation.navigate('Fatura')}><Text style={estilo.details}>Detalhes</Text></TouchableOpacity>
        </View>
        <View style={estilo.display_cartao}>
            <Text style={estilo.cartao_titulo}>Cartões ativos</Text>
            <Cartao></Cartao>
            <TouchableOpacity style={estilo.btn}><Text style={estilo.details_cartao}>Detalhes</Text></TouchableOpacity>
        </View>
        <StatusBar style="light" hidden={false} />
        </ScrollView >
    )
}
}
