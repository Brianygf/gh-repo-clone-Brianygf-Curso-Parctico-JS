

  const lista = [
    100,
    200,
    500,
    400000000,
    10,
    6,
    90,11,985
   
];
//Link ordenamientos de array por numero o letras
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

lista.sort((a, b) => a - b);//Esta linea ordena los numeros del aray lista

const mitadLista= parseInt(lista.length / 2) ;//divide en dos la cantiad de posiciones que tiene nuestro array y le quita decimales

function esPar (numero){//Función que da true si e spar o false si es impar
    if (numero % 2 === 0) {
        return true;
        
    }
    else {
        return false;
    }
}
let mediana;

    if (esPar(lista.length)) {     //Selección de las posiciones de los arrays necesarios para realizar luego el promedio
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];   
    const promedioElemento1y2 =  calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
     mediana= promedioElemento1y2;
}

else {
    mediana = lista[mitadLista];

}


function calcularMediaAritmetica(lista) {
   
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }