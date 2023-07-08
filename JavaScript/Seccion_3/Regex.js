/* 
    ¿Qué Son Expresiones Regulares?
    Las expresiones regulares(también conocida como regexp o regex) son una secuencia de caracteres que 
    forman un patrón de búsqueda, y se utilizan para hacer comparaciones con texto.
    Son una herramienta poderosa para manipular y validar texto, y se pueden utilizar en conjunto 
    con métodos de JavaScript como .match(), .replace() etc..

    Se utilizan en muchos lenguajes de programación, incluyendo JavaScript, para verificar si una cadena de 
    texto cumple con un determinado patrón o para reemplazar texto por un patrón determinado. 
    
    Las expresiones regulares están escritas entre barras / y pueden incluir una combinación de caracteres 
    literales y caracteres especiales que representan un conjunto de caracteres posibles. 
    
    Por ejemplo, la expresión regular /\d{3}-\d{3}-\d{2}-\d{2}/ busca un número de celular 
    en formato 111-111-11-11.

    Se pueden usar en una gran variedad de tareas, como validación de formularios, extracción de información 
    de un párrafo etc...


    Sintaxis:
    • const regexp = /".e.t."/i;


    Coincidencias Basicas
    .       - Cualquier Caracter, excepto nueva linea
    \       - Indica que el siguiente caracter se debe tratar de manera especial o "escaparse".
    \d      - Cualquier Digitos (0-9)
    \D      - No es un Digito (0-9)
    \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
    \W      - No es un Caracter de Palabra.
    \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
    \S      - No es un Espacio, Tab o nueva linea.

    Limites
    \b      - Limite de Palabra
    \B      - No es un Limite de Palabra
    ^       - Inicio de una cadena de texto
    $       - Final de una cadena de texto

    Cuantificadores:
    *       - Coincide con 0 o más ocurrencias del patrón anterior.
    +       - Coincide con 1 o más ocurrencias del patrón anterior.
    ?       - Coincide con 0 o 1 ocurrencia del patrón anterior.
    {3}     - Numero Exacto.
    {3,4}   - Rango de Numeros (Minimo, Maximo).
    {3,}    - Rango de Numeros (Minimo) hasta infinito.

    Conjuntos de Caracteres
    []      - Caracteres dentro de los brackets
    [^ ]    - Caracteres que NO ESTAN dentro de los brackets

    Grupos
    ( )     - Grupo
    |       - Uno u otro


    probar en: http://regexr.com/77g8v

*/




let cadenaDeTexto = 
`Con las expresiones regulares podemos realizar busquedas de secuencias o patrones de caracteres,
un ejemplo de su uso es al detectar palabras ofensivas en un chat, o al obtener todos los numeros
telefonicos que coincidan con un patron establecido.

Ejemplo: 

Daniel Moran	
daniel_m@hotmail.com
934 123 45 67
www.dmoram.com

Migel Soto
934-234-56-78
32134@miguel123@outlook.comEstosCaracteresSe_ignoran.
https://www.miguel.com.cl

Camila Duran
412 345 67 89
www.camila.shop
cami-duran@gmail.com

12345-12345-555-12345678911111

`;




//Definiendo expresion regular 
// (g= buscar todas las coincidencias, i= sin distincion de mayusculas, m= busca en todas las lineas)

const miPrimeraRegExp = /\d\d\d-\d\d\d-\d\d-\d\d/g;


// Ejemplo de patron numerico especifico usando cuantificadores.
//                 buscar 5 exactamente - buscar 3 en adelante - buscar entre 1 y 3 - buscar entre 5 y 10
const miPrimeraRegExp2 = /\d{5}-\d{3,}-\d{1,3}-\d{5,10}/g;



// Realizando busqueda
// .match() busca coincidencias entre una expresión regular y el texto que está siendo evaluado. 
// Devuelve un arreglo que contiene las coincidencias encontradas, 
// o null si no se encontraron coincidencias.

// Sintaxis: cadenaDeTexto.match(expresionRegular);

let resultados = cadenaDeTexto.match(miPrimeraRegExp);
let resultados2 = cadenaDeTexto.match(miPrimeraRegExp2);


// Ver resultados obtenidos.
console.log(resultados);
console.log(resultados2);




let frase = "En las noticias hablaron sobre un grupo de hackers que tomo el control de una plataforma, evilHackers se llama el grupo."
const regexGroseria = /hacker/gi;

let busqueda = frase.match(regexGroseria);

console.log(busqueda);





// Ejemplo Correo:
// La expresion debe contener: 
// caracter de palabra de 1 o mas, 
// caracter @ seguido de caracteres de palabra entre 1 a 7, 
// seguido de .com
// ademas, obtener todas las concidencias sin distincion de mayusculas


const correoRegex = /\w+\@\w{1,7}\.com/gi;

let busqueda2 = cadenaDeTexto.match(correoRegex);

console.log(busqueda2);




// Buscar una coincidencia donde se encuentre un caracter de palabra seguido de un numero.
// Adicional encuentra un caracter de palabra seguido por un espacio.
const texto = `El caballo de la casilla c4 le permitio ganar la partida de ajedrez, al moverlo a la casilla d6`;
const mensajeOculto = "Entrad aqui este zigzag termino aqui";

const regexCoordenadas = /\w\d/gi;
const regexLetraEspacio = /\w\s/gi;

let busqueda3 = texto.match(regexCoordenadas);
let busqueda4 = mensajeOculto.match(regexLetraEspacio);

console.log(busqueda3);
console.log(busqueda4);




// Evaluar una cadena que inicie y termine de un modo especifico.
const cadena1 = "El correo es diego@gmail.com";
const cadena2 = "diego@gmail.com";

let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;


const resultado1 = cadena1.match(emailRegex);
console.log(resultado1);


const resultado2 = cadena2.match(emailRegex);
console.log(resultado2);






// Realizar en casa:
// Ejercicio 1
// Realiza una expresion regular que permita la validación de fechas en formato MM/DD/YYYY 
// (por cada inicial es un numero), y retornar en consola si la fecha es valida o no.


// Ejercicio 2
// Validación de URLs en formaro https://www.mipagina123.com