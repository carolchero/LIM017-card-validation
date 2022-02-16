const validator = {
  // ...
  isValid : (numeroTarjeta) => {
    return esTarjetaValida(numeroTarjeta);
  },
  maskify :(cadena) =>{
    let cantidad = cadena.length - 4;
    let mascara = '';
    for(let i = 0; i<cantidad; i++){
      mascara = mascara + '#';
    }

    return mascara + cadena.substring((cadena.length-4),(cadena.length))},

};
export const esTarjetaValida = (numeroTarjeta) => {
  return !isNaN(numeroTarjeta) && validarAlgoritmoNuhn(numeroTarjeta);
}

function validarAlgoritmoNuhn(numeroTarjeta){

  let cadenaInv = invertirCadena(numeroTarjeta);
  let cadenaModPares = modificarPosicionPares(cadenaInv);
  let suma = obtenerSumaCadena(cadenaModPares);
  let esMultiploDeDiez = esMultiploDiez(suma);


  return esMultiploDeDiez;
}

function invertirCadena(cadena){
  let cadenaInv = '';

  for(let i = 0; i< cadena.length; i++){


    cadenaInv = cadena.charAt(i) +cadenaInv;

  }

  return cadenaInv;

}

function modificarPosicionPares(cadena){

  let arreglo = cadena.split('');
  for(let i = 0; i < arreglo.length; i++){

    if((i + 1) % 2 == 0){
      let num = parseInt(arreglo[i]);

      num = num * 2;
      if(num >= 10){
        num = Math.floor(num / 10) + (num % 10);
      }
      arreglo[i] = num;
    }

  }

  return arreglo.join('');
}

function obtenerSumaCadena(cadena){
  let suma = 0;

  let numSuma = cadena.split('');
  for(let i=0;i<numSuma.length;i++){
    let nuevoNumero = parseInt(numSuma[i])
    suma = suma + nuevoNumero;
  }


  return suma;
}
function esMultiploDiez(suma){

  return suma%10==0;
}

export default validator;
