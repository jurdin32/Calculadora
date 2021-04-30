import React, { useRef, useState } from "react";

enum operadores{
  suma,resta,multiplicacion,dividir
}

export const useCalculadora = () => {

  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');


  const ultimaOperacion = useRef<operadores>();

  const limpiar = () =>{
    setNumero('0')
    setNumeroAnterior('0');
  }

  const positivoNegativo =() =>{
    if(numero.includes('-')){
      setNumero(numero.replace("-",""));
    }else{
      setNumero("-"+numero)
    }
  }

  const armarNumero =(numeroTexto:string) =>{
    //no aceptar mas de 1 punto
    if(numero.includes('.') && numeroTexto ===".") return;

    if (numero.startsWith('0')|| numero.startsWith("-0")){
      //punto decimal
      if(numeroTexto==='.'){
        setNumero(numero+numeroTexto);
        //evaluar si es otro 0 y hay un punto
      } else if( numeroTexto=='0' && numero.includes('.')){
        setNumero(numero+numeroTexto);
        //evalluar si es diferente de 0 y no tiene un punto
      } else if(numeroTexto!=='0' && !numero.includes('.')){
        setNumero(numeroTexto);
        //evitar el 00000000000
      } else if(numeroTexto==='0' && !numero.includes('.') ){
        setNumero(numero)
      }else{
        setNumero(numero+numeroTexto);
      }
    }
    else{
      setNumero(numero+numeroTexto);
    }
  }

  const cambiarNumeroPorAnterior = () =>{
    if(numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0,-1));
    }
    else{
      setNumeroAnterior(numero);
    }
    setNumero('0')

  }

  const borrarUltimo = () =>{
    let negativo ='';
    let numeroTemporal=numero;

    if (numero.includes('-')){
      negativo='-'
      numeroTemporal =numero.substr(1);
    }
    if (numeroTemporal.length > 1){
      setNumero(negativo+numeroTemporal.slice(0,-1));
    }else{
      setNumero('0')
    }

  }

  const botonDividir =() =>{
    cambiarNumeroPorAnterior()
    ultimaOperacion.current =operadores.dividir;

  }
  const botonMultiplicar =() =>{
    cambiarNumeroPorAnterior()
    ultimaOperacion.current =operadores.multiplicacion;

  }
  const botonRestar =() =>{
    cambiarNumeroPorAnterior()
    ultimaOperacion.current =operadores.resta;

  }
  const botonSumar =() =>{
    cambiarNumeroPorAnterior()
    ultimaOperacion.current =operadores.suma;

  }

  const calcular =() =>{
    const numero1= Number(numero)
    const numero2 =Number(numeroAnterior)

    switch (ultimaOperacion.current) {
      case operadores.suma:
        setNumero(`${numero1+numero2}`)
        break;
      case operadores.resta:
        setNumero(`${numero2-numero1}`)
        break;
      case operadores.multiplicacion:
        setNumero(`${numero1*numero2}`)
        break;
      case operadores.dividir:
        setNumero(`${numero2/numero1}`)


    }
    setNumeroAnterior('0')
  }
  return {
    limpiar,
    positivoNegativo,
    botonSumar,
    botonRestar,
    botonMultiplicar,
    botonDividir,
    borrarUltimo,
    calcular,
    numero,
    numeroAnterior,
    armarNumero,
  }
}
