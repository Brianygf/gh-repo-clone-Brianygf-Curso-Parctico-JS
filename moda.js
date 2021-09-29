const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {};
  
  lista1.map( // volvemos el array lista 1 un objeto
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1; //le asigna al siguiente elemento la posición siguiente
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(//Sirve para volver un objeto a un array con arrays por dentro con Object.entries
    function (elementoA, elementoB) { // sort sirve para ordenar de menor a mayor pero solo con el segundo dato posicion 1, no 0 si no 1
      return elementoA[1] - elementoB[1];
    }
  );
  // muestra la ultima posición de nuestro array
  //Como ya esta organizados de menor a mayor  con la posicion 2 del array
  //colocamos (lista1Array.length -1) que nos muestra la ultima posición de lista1Array
  const moda = lista1Array[lista1Array.length - 1]; 