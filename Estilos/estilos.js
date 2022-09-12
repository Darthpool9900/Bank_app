import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(16, 16, 28,1)',
      },
      title: {
        color:'#d3d3e3',
        width:'80%',
        fontFamily:'Roboto_300Light',
        fontSize:64,
        marginLeft:'4%',
        flexWrap:'wrap',
      },
      back: {
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(16, 16, 28)'
      },
      login:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        marginTop:'20%'
      },
      input:{
        fontFamily:'Roboto_300Light',
        color:'#d3d3e3',
        marginTop:20,
        fontSize:28,
        textAlign:'left',
        width:'80%',
        borderBottomColor:'rgba(211, 211, 227,0.6)',
        borderBottomWidth:2
      },
      button:{
        marginTop:'10%',
        backgroundColor:'#d3d3e3',
        width:'50%',
        height:50,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius:20,
      },
      t_button:{
        textAlign:'center',
        fontFamily:'Roboto_300Light',
        fontSize:24,
        fontWeight:'bold',
        color:'rgba(16, 16, 28,1)',
      },
      btn:{
        marginTop:'10%',
        zIndex:1
      },
      card_user: {
        justifyContent:'center',
        marginTop:'15%',
        margin:'5%',
        width:'90%',
        height:400,
        backgroundColor:'rgba(65,65,69,0.3)',
        borderRadius:20
    },
    title_info:{
        fontFamily:'Roboto_300Light',
        fontSize:48,
        color:'#d3d3e3',
        position:'absolute',
        left:'5%',
        top:'1%',
    },
    money:{
        marginLeft:'5%',
        width:'100%',
        marginTop:'20%',
    },
    saldo:{
        color:'#d3d3e3',
        fontFamily:'Roboto_300Light',
        fontSize:24,
    },
    saldo_value:{
        color:'#d3d3e3',
        fontFamily:'Roboto_300Light',
        fontSize:64,
        textAlign:'center',
        justifyContent: 'center',
        marginRight:'10%'
    },
    buton:{
        textAlign:'center',
        justifyContent: 'center',
        marginTop:50,
        backgroundColor:'#d3d3e3',
        width:'60%',
        height:50,
        fontFamily:'Roboto_300Light',
        color:'rgba(16, 16, 28,1)',
        borderRadius:20,
        fontSize:24,
        padding:'2%'
    },
    btn:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    fatura:{     
        marginTop:'5%',
        margin:'5%',
        width:'90%',
        height:400,
        backgroundColor:'rgba(65,65,69,0.3)',
        borderRadius:20,
        padding:'3%'
    },
    mov_text:{
        textAlign:'center',
        color:'#d3d3e3',
        fontFamily:'Roboto_300Light',
        fontSize:24,
        borderBottomWidth:1,
        borderBottomColor:'#d3d3e3',
        padding:'1%',
        marginLeft:'8%',
        marginRight:'8%'
    },
    bloco:{
        margin:'8%',
        borderLeftWidth:1,
        borderLeftColor:'rgba(211, 211, 227,0.6)',
        paddingLeft:'3%'
    },
    display_cartao:{
        marginTop:'5%',
        margin:'5%',
        width:'90%',
        height:420,
        backgroundColor:'rgba(65,65,69,0.3)',
        borderRadius:20,
        padding:'3%',
    },
    cartao_titulo:{
        textAlign:'center',
        color:'#d3d3e3',
        fontFamily:'Roboto_300Light',
        fontSize:24,
        borderBottomWidth:1,
        borderBottomColor:'#d3d3e3',
        padding:'1%',
        marginLeft:'8%',
        marginRight:'8%'
    },
   
    details:{
        textAlign:'center',
        justifyContent: 'center',
        width:'60%',
        fontFamily:'Roboto_300Light',
        fontSize:24,
        height:50,
        color:'rgba(16, 16, 28,1)',
        backgroundColor:'#d3d3e3',
        padding:'2%',
        borderRadius:20,
    },
    details_cartao:{
        textAlign:'center',
        justifyContent: 'center',
        width:'60%',
        fontFamily:'Roboto_300Light',
        fontSize:24,
        height:50,
        color:'rgba(16, 16, 28,1)',
        backgroundColor:'#d3d3e3',
        padding:'2%',
        borderRadius:20,
        marginBottom:'10%'
    },
    vidro:{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:'20%',marginBottom:'10%'},
    btn_perfil:{
        marginTop:'10%',
        zIndex:1
      },
      txt:{
        transform:[{rotate:'180deg'}],
        position:'absolute',
        top:'10%',
        left:'2%',
        fontSize:24,
        color:'#d3d3e3',
      },
      perfilCaixa:{
            alignItems:'center', 
            marginTop:'15%',
            margin:'5%',
            width:'90%',
            height:350,
            backgroundColor:'rgba(65,65,69,0.3)',
            borderRadius:20
      },
      perfilPhoto:{
        width:'58%',
        marginTop:'10%',
        height:200,
        backgroundColor: '#2e505c',
        borderRadius:100,
      },
      UserName:{
        marginTop:'2%',
        fontSize:64,
        fontFamily:'Roboto_300Light',
        color:'#d3d3e3'
      },
      conta_entrar:{
        width:'100%',
        backgroundColor: 'rgba(65,65,65,0.3)',
        height:'100%',
        padding:'2%',
        fontSize:22,
        color:'#d3d3e3',
        borderRadius:10
      },
      verConta:{
        
        width:'90%',
        marginTop:'5%',
        height:50
      },
      carregador:{
        width:'90%',
        justifyContent:'center',
        height:350,
        borderRadius:300,
        borderWidth:5,
        borderColor:'#d3d3e3',
      },
      container_load:{
        flex: 1,
        backgroundColor: 'rgba(16, 16, 28,1)',
        justifyContent:'center',
        alignItems:'center'
      },
      carregador_text:{
        fontFamily:'Roboto_300Light',
        fontSize:48,
        color:'#d3d3e3',
        textAlign:'center',
      }
})