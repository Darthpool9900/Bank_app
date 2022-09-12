import { StatusBar } from 'expo-status-bar';
import { View,Animated,Text} from 'react-native';
import { useState } from 'react';
import estilo from './Estilos/estilos'

export default function Loader(){
  return(
    <View style={estilo.container_load}>
      <StatusBar style="light"/>
        <View style={estilo.carregador}>
          <Text style={estilo.carregador_text}>Carregando</Text>

        </View>
        
    </View>
  )
}
