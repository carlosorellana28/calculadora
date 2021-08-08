// requerimos los elementos para proceder a utilizarlos 
const input = document.querySelector('.pantalla');
const boton = document.querySelector('.botones');


input.value='0';
let estadoOperacion = false;
let tipoOperacion='';
let numero1=0;
let numero2=0;



boton.addEventListener('click', e =>{
    // obtenemos el tipo de elemento del evento que
    let p = e.target,
        v= p.dataset;
   //detectar si se ha pulado un numero
   if(v.numero) imprimirEnPantalla(v.numero);
   //detectamos si es una operacion
   //encviamos dos parametros el promero nos permite obtener los valores del evento el segundo nos permite obtener el valor del la propiedad data
   if(v.operacion) operacion(p,v.operacion);
    //    verificamos si el valor es difeerente a operacion o numero de la propiedad
    if(v.accion) getAccion(v.accion);

   
})


let imprimirEnPantalla = numero =>{
// verificamos si la pantalla tiene un cero al inicio 
    input.value ==='0' || estadoOperacion === true
    ? input.value = numero
        : numero === '.' && !input.value.includes('.') 
            ?input.value += numero
                :numero !=='.'
                    ?input.value += numero
                        : null;
            
        estadoOperacion = false;

}
let operacion=(elemento,signo) =>{
    estadoOperacion= true;
    numero1= Number(input.value);
    tipoOperacion= signo;
    input.value = elemento.textContent;
    // return{numero1,tipoOperacion};
    // console.log(tipoOperacion);
    
}

let getAccion = (accion) => {
    
    let getResult=(numero1,tipoOperacion)=> {
        numero2 = Number( input.value);
        let resultado;
        switch(tipoOperacion) {
            
            case 'suma': 
            resultado  = numero1 + numero2;
            break;
            case 'resta': 
            resultado =numero1 - numero2;
            break;
            case 'multiplicar': 
            resultado =numero1 * numero2;
            break;
            case 'dividir': 
            resultado =numero1 / numero2;
            break;
            
        }
        resultado === Infinity 
        ?input.value='Error Matematico'
            :input.value =resultado;
    }
    accion === 'reset'
    ? input.value = '0'
    : getResult(numero1,tipoOperacion);
    // al finalizar la operacion es necesario poner el estado de loa operacion a tru para limpiar la pantala nuevamente
    estadoOperacion = true;

}


