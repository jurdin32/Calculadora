import { StyleSheet } from "react-native";


export const styles =StyleSheet.create({
  fondo:{
    flex:1,
    backgroundColor:'black',
    paddingHorizontal:20,
    justifyContent:'flex-end',
  },
  resultado:{
    color:'white',
    fontSize:60,
    textAlign:"right",
    marginBottom:25,
  },
  resultadop:{
    color:'rgba(255,255,255,0.5)',
    fontSize:30,
    textAlign:"right",
  },
  fila:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:18,
    paddingHorizontal:30,

  },
  boton:{
    height:60,
    width:60,
    backgroundColor:'#2d2d2d',

    justifyContent:'center',
    marginHorizontal:5,
  },
  botonTexto:{
    textAlign:'center',
    padding:5,
    fontSize:20,
    color:'white',
    fontWeight:'bold',
  }
});
