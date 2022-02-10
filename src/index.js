import validator, {esTarjetaValida} from './validator.js';

let btnPagarAqui
btnPagarAqui=document.getElementById('btnPagaAqui');
btnPagarAqui.addEventListener('click',function (event){
  console.log(event.target)
  empezarPago();
})
function empezarPago(){
  let pantallaInicio = document.getElementById('primeraPantalla');
  pantallaInicio.classList.add('oculto');
  let formulario = document.getElementById('formularioPago');
  formulario.classList.remove('oculto');

}

let formulario = document.getElementById('primeraPantalla');
formulario.classList.remove('oculto');



let inputNumero = document.getElementById('cn');
inputNumero.addEventListener('blur',function (){
  validNumber();
})
inputNumero.addEventListener('keydown',(event)=>{
  let valor = document.getElementById('cn').value;
  let posicionCaret = event.target.selectionStart - 1;
  let primeraParte,segundaParte;
  let ultimoBloqueCuatro;

  if (valor.length >= 19 || event.key === 'ArrowLeft'||event.key === 'ArrowRight'){
    return;
  }

  console.log(event)
  if(event.key === 'Backspace'){
    if (valor.charAt(posicionCaret) === ' '){
      event.preventDefault();
      event.stopPropagation();
      event.target.selectionStart = posicionCaret;
      event.target.selectionEnd = posicionCaret;
    }
    else {
      document.getElementById('cn').value = valor.trim();
      event.target.selectionStart = posicionCaret + 1;
      event.target.selectionEnd = posicionCaret + 1;
    }
    return;
  }
  ultimoBloqueCuatro = valor.substring(posicionCaret-3,posicionCaret+1); //  "43"
     if (ultimoBloqueCuatro.length === 4 && !ultimoBloqueCuatro.includes(' ')){
       primeraParte = valor.substring(0,posicionCaret +1);
       segundaParte = valor.substring(posicionCaret + 1,valor.length);

       valor = primeraParte + ' ' + segundaParte.trim();
       document.getElementById('cn').value = valor;
       event.target.selectionStart = posicionCaret + 2;
       event.target.selectionEnd = posicionCaret + 2;
     }
     console.log(ultimoBloqueCuatro);
})

function  validNumber(){
  let numeroTarjetaErrada;
  let valor = document.getElementById("cn").value;
  let nuevoValor = valor.replaceAll(' ','');
  let mascara;

  if (!esTarjetaValida(nuevoValor)){
    numeroTarjetaErrada=document.getElementById('numeroTarjetaEquivocado');
    numeroTarjetaErrada.classList.remove('oculto');

  } else{
    numeroTarjetaErrada=document.getElementById('numeroTarjetaEquivocado');
    numeroTarjetaErrada.classList.add('oculto');



    mascara = maskify(valor);

    document.getElementById("cn").value = mascara;
  }
}

function maskify(valor){

  let cantidad = valor.length - 4;
  let mascara = '';
  for(let i = 0; i<cantidad; i++){
    mascara = mascara + '#';
  }
  return '#### #### #### ' + valor.substring((valor.length-4),(valor.length));

}

let nombreInput = document.getElementById('name');
nombreInput.addEventListener('blur',function(){
  validarTexto();
})

function validarTexto(){

  let nombre=document.getElementById('name').value;

  if(nombre.trim() === ""){
    let nombreEquivocado=document.getElementById('nombreEquivocado');
    nombreEquivocado.classList.remove('oculto');
  }
  else{
    let nombreEquivocado=document.getElementById('nombreEquivocado');
    nombreEquivocado.classList.add('oculto');
  }
  console.log(nombre);
}

let mesInput = document.getElementById('MM');
mesInput.addEventListener('blur',function(){
  validarMes();
})


function validarMes(){
  let mesEquivocado
  let mesErrado
  let mes = document.getElementById('MM').value;
  if(isNaN(mes)){
    mesEquivocado=document.getElementById('mensajeEquivocado')
    mesEquivocado.classList.remove('oculto');

  }else{
    if(mes>0 && mes<13){
      mesEquivocado=document.getElementById('mesEquivocado');
      mesEquivocado.classList.add('oculto');

      mesErrado=document.getElementById('mesErrado')
      mesErrado.classList.add('oculto');
    }

    else{
      mesErrado=document.getElementById('mesErrado');
      mesErrado.classList.remove('oculto');
    }
  }
  console.log(mes);

}

let anioInput = document.getElementById('YY');
anioInput.addEventListener('blur',function(){
  validAnio();
})

function validAnio(){

  let yearEquivocado
  let anio = document.getElementById('YY').value;
  if ( isNaN(anio)){
    yearEquivocado=document.getElementById('yearEquivocado');
    yearEquivocado.classList.remove('oculto');
  } else{
    if(anio>=21 && anio<30){
      yearEquivocado=document.getElementById('yearEquivocado');
      yearEquivocado.classList.add('oculto');
      yearEquivocado=document.getElementById('yearErrado');
      yearEquivocado.classList.add('oculto');
    }
    else {
      yearEquivocado=document.getElementById('yearErrado');
      yearEquivocado.classList.remove('oculto');

    }

  }
}

let cvvInput = document.getElementById('CVV');
cvvInput.addEventListener('blur',function (){
  validCvv();
})

function validCvv(){

  let cvvEquivocado
  let cvv = document.getElementById('CVV').value;
  if ( isNaN(cvv)){
    cvvEquivocado=document.getElementById('cvvEquivocado');
    cvvEquivocado.classList.remove('oculto');
  } else{

      cvvEquivocado=document.getElementById('cvvEquivocado');
      cvvEquivocado.classList.add('oculto');


  }

}

let enviarInput = document.getElementById('botonPagar');
enviarInput.addEventListener('blur',function(){

})

console.log(validator);

