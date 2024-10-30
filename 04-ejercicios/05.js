/**
 * Crear un algoritmo que devuelva el 
 * número mayo y menor de un array.
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
   let mayor = arr[0];
   let menor = arr[0];
   for (num of arr) {
      mayor = mayor > num ? mayor : num;
      menor = menor < num ? menor : num;
   }
   return [menor,mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);