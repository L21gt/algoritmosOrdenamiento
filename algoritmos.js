
/**Creacion de la funcion para generar los numeros al azar del 0 al 10,000
 * de manera aleatoria*/
function generarNumerosAleatorios(cantidad, maximo) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (maximo + 1)); // Genera un número aleatorio entre 0 y maximo inclusive
        numeros.push(numeroAleatorio);
    }
    return numeros;
}



//-----------------------------------------------------------------------------
// Descomentar codigo para Implementar Bubble Sort

/*function bubbleSort(array) {
    let n = array.length;
    let intercambiado;
    do {
        intercambiado = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Intercambiar elementos
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                intercambiado = true;
            }
        }
        n--; // Optimización: reducir el rango de comparación
    } while (intercambiado);
    return array;
}

// Crear array de numeros aleatorios antes de ordenar
const numerosAleatorios = generarNumerosAleatorios(10000, 100000);
console.log("Array antes de ordenar:", numerosAleatorios);

// Ordenar el array
const numerosOrdenados = bubbleSort(numerosAleatorios);
console.log(numerosOrdenados);*/



//-----------------------------------------------------------------------------
// Descomentar para implementar Selection Sort

/*function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Intercambia el elemento más pequeño encontrado con el primer elemento
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Crear array de numeros aleatorios antes de ordenar
const numerosAleatorios = generarNumerosAleatorios(10000, 100000);
console.log("Array antes de ordenar:", numerosAleatorios);


// Ordenar el array usando Selection Sort
const numerosOrdenados = selectionSort(numerosAleatorios);
console.log("Array después de ordenar:", numerosOrdenados);*/



//-----------------------------------------------------------------------------
// Descomentar para implementar Insertion Sort

/*function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

const numerosAleatorios = generarNumerosAleatorios(10000, 10000);
console.log("Antes de ordenar:", numerosAleatorios); 

const numerosOrdenados = insertionSort(numerosAleatorios);
console.log("Después de ordenar:", numerosOrdenados); */



//-----------------------------------------------------------------------------
// Descomentar para implementar Merge Sort

/*function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mitad = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, mitad);
    const derecha = arr.slice(mitad);

    return merge(mergeSort(izquierda), mergeSort(derecha));
}

function merge(izquierda, derecha) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < izquierda.length && j < derecha.length) {
        if (izquierda[i] < derecha[j]) {
            resultado.push(izquierda[i]);
            i++;
        } else {
            resultado.push(derecha[j]);
            j++;
        }
    }

    return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
}

const numerosAleatorios = generarNumerosAleatorios(10000, 10000);
console.log("Array sin ordenar:", numerosAleatorios);

const numerosOrdenados = mergeSort(numerosAleatorios);
console.log("Array ordenado:", numerosOrdenados);*/



//-----------------------------------------------------------------------------
// Descomentar para implementar Quick Sort

// Función de Quick Sort
/*function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];
    
    for (let num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }
    
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Generar el array de números aleatorios
const numerosAleatorios = generarNumerosAleatorios(10000, 10000);
console.log("Números aleatorios generados:", numerosAleatorios);

// Ordenar el array usando Quick Sort
const numerosOrdenados = quickSort(numerosAleatorios);
console.log("Números ordenados:", numerosOrdenados);*/

