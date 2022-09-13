import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView,Image,FlatList,Dimensions} from 'react-native';

const {width,height} = Dimensions.get('screen');
const imgW = width*0.8;
const imgH = height*0.2;

export default function Cartao(){
const data = [
  './assets/Cartao1.png',
  './assets/Cartao2.png',
  './assets/Cartao3.png',

]



  return(
    <FlatList style={{width:'100%',marginTop:'10%',padding:0}}
      data={data}
      renderItem={({item})=>{
                    return(
                      <View>
                          <View style={styles.cartao}>
                          <View style={styles.chip}></View>
                          </View>
                        </View>
                          )
                      }}
        keyExtractor={(_,index)=>index.toString()} horizontal={true} pagingEnabled={true} vertical={false} scrollIndicator={false} showsHorizontalScrollIndicator={false} snapToAlignment="start"
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#2C2F34',
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    marginTop: 40,
    marginBottom: 5,
  },
  cartao:{
    width:imgW,
    height:imgH,
    backgroundColor:'#552b99',
    borderRadius:20,
    marginLeft:10,
    marginRight:20,
},
chip:{
    position:'absolute',
    left:'3%',
    bottom:'4%',
    backgroundColor:'#cfb759',
    width:50,
    height:50,
    borderRadius:8,
},
});