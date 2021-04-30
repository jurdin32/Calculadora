import React from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../themes/AppTheme";

interface Props {
  texto:string;
  color?:string;
  ancho?:boolean;
  accion:(numeros:string)=>void;
}

export const Boton = ({texto,color='#272E38',ancho,accion }:Props) => {
    return (
      <TouchableOpacity onPress={() => accion(texto)}>
      <View style={{
        ...styles.boton,
        backgroundColor:color,
        width: (ancho==true)?180:80
      }} >
        <Text style={{
          ...styles.botonTexto,
          color: (color==='#272E38')?'white':'black'
        }}>{texto}</Text>
      </View>
      </TouchableOpacity>
    )
}
