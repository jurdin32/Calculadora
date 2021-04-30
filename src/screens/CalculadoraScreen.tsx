import React, { useEffect } from "react";
import { Text, View } from "react-native";
import SplashScreen from 'react-native-splash-screen'

import { styles } from "../themes/AppTheme";
import { Boton } from "../components/Boton";
import { useCalculadora } from "../hooks/useCalculadora";




export const CalculadoraScreen = () => {
  const {
    limpiar,
    positivoNegativo,
    botonSumar,
    botonRestar,
    botonMultiplicar,
    borrarUltimo,
    calcular,
    numero,
    numeroAnterior,
    armarNumero,
    botonDividir,
  }=useCalculadora();

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <View>
      {
        (numeroAnterior !=='0') && (
          <Text style={styles.resultadop}>{numeroAnterior}</Text>
        )
      }

      <Text style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{numero}</Text>
      <View style={styles.fila}>
        <Boton texto="C" accion={limpiar}  color='#5D5B5D'/>
        <Boton texto="+/-" color='#5D5B5D' accion={positivoNegativo}/>
        <Boton texto="Del" color='#5D5B5D' accion={borrarUltimo} />
        <Boton texto="/" color="#ff9427" accion={botonDividir} />
      </View>
      <View style={styles.fila}>
        <Boton texto="7" accion={armarNumero}/>
        <Boton texto="8" accion={armarNumero}/>
        <Boton texto="9" accion={armarNumero}/>
        <Boton texto="x" color="#ff9427" accion={botonMultiplicar}/>
      </View>
      <View style={styles.fila}>
        <Boton texto="6" accion={armarNumero}/>
        <Boton texto="5" accion={armarNumero}/>
        <Boton texto="4" accion={armarNumero}/>
        <Boton texto="-" color="#ff9427" accion={botonRestar}/>
      </View>
      <View style={styles.fila}>
        <Boton texto="3" accion={armarNumero}/>
        <Boton texto="2" accion={armarNumero}/>
        <Boton texto="1" accion={armarNumero}/>
        <Boton texto="+" color="#ff9427" accion={botonSumar}/>
      </View>
      <View style={styles.fila}>
        <Boton texto="0" accion={armarNumero} ancho />
        <Boton texto="." accion={armarNumero}/>
        <Boton texto="=" color="#ff9427" accion={calcular} />
      </View>
  </View>);
};
