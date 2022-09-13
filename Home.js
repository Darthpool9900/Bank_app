import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import {useFonts,Roboto_300Light} from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import Cartao from './Cartao';
import estilo from './Estilos/estilos'
import Loader from './Loader';



export default function Home({route}){
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Roboto_300Light,
      });
if(!fontsLoaded){
    return(<Loader></Loader>)
}else{

    return(
        <ScrollView style={estilo.container}>
        <View style={estilo.card_user}>
            <Text style={estilo.title_info}>Olá {'\n'}{route.params?.nome}</Text>
            <View style={estilo.money}>
                <Text style={estilo.saldo}>Saldo atual:</Text>
                <Text style={estilo.saldo_value}>R${route.params?.saldo}</Text>
            </View>
            <TouchableOpacity style={estilo.btn} onPress={()=>navigation.navigate('Conta',{nome:'Rafael',saldo:'0.00',fatura:'0.00',poupanca:'0.00',cartao:'sicredi'})}><Text style={estilo.buton}>Ver detalhes</Text></TouchableOpacity>
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
            <TouchableOpacity style={estilo.btn} onPress={()=>navigation.navigate('Fatura',{saldo:route.params.saldo,fatura:route.params.fatura,poupanca:route.params.poupanca})}><Text style={estilo.details}>Detalhes</Text></TouchableOpacity>
        </View>
        <View style={estilo.display_cartao}>
            <Text style={estilo.cartao_titulo}>Cartões ativos</Text>
            <Cartao></Cartao>
            <TouchableOpacity onPress={()=>navigation.navigate('Cartoes')} style={estilo.btn}><Text style={estilo.details_cartao}>Detalhes</Text></TouchableOpacity>
        </View>
        <StatusBar style="light" hidden={false} />
        </ScrollView >
    )
}
}
