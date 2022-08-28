//las palabras de mis comentarios
var mi_nombre = "Debora"
var ano = 2022
var booleano = "verdadero"
var booleano = "falso"

// crear listas
var letras =  [] //lista vacía
var letras =["a","b","c","d"] //agrego elementos a mi lista
var numeros [1,2,3,4,5]
//numeros[4] =5
var mixto=["a",1,"b",2,"c",3]
//mixto[2]=2
var lista_compras =["platanos", 2,"papas",5]

//frases condicionales
2 > 3// mas que
2  <  3//menos que
2 == 3//igual que -se usan 2 simbolos de igual porque con uno solo se asignan valores
(5-2) <= (3-2)//menos o igual que (combinación)
(5-2) >= (3-2)//más o igual que (combinación)
10 <= 11 //figura true porque se cumple UNA condición pero no porque ambas conciciones se cumplen.
(10 == 10) && (10 < 11)// menos que e igual que
(10 > 11) && (3>=5)
(10 ==  10) && (3>=5)

(10 >=11) || ("a" == "a") // Para chequear si UNA  de las DOS condiciones están satisfechas
(10 >=11) || ("a" == "b")

//Ciclo If: Si la condición del ciclo se cumple, el ciclo hará los pasos dentro de sus corchetes cursivos.
var referencia  = 2020
var este_ano    = 2022
if (referencia == este_ano){
console.log("El año en que estoy es 2020")
}
else if ((referencia+1)== este_ano) {
 console.log("El año en que estoy es 2021")   //si no se cumple el If tiene que hacer esto
}
else{
console.log("El año en que estoy es 2022")    //si no cumplió de ninguno de los anteriores hacer esto por descarte
}


//CICLO WHILE
var referencia  = 2022
var este_ano    = 2022
while (referencia == este_ano){
    //repetir estos pasos mientras la condición se cumpla
    console.log("El año en que estoy es 2022") //mientras la condición se cumpla se hará un BUCLE INIFITO -no parará-
}

var referencia  = 2020
var este_ano    = 2022
while (referencia == este_ano){
    //repetir estos pasos mientras la condición se cumpla
    console.log("El año en que estoy es 2022") //mientras la condición no se cumpla no compilará nada.
}

//Imprimir números entre 1 y 5
//Punto de inicio: 1
//Punto de término: 5
//Aumentando los numeros por 1
//Resultados deseados: 1, 2,3,4,5

var contador = 1;
while(contador<6){
    //repetir estos pasos mientras la condición se cumpla
console.log(contador)
contador = contador + 1
//Muestra el 6 por el contador pero no cuenta
}


//Ciclo For (para)
for (var contador=1; contador<5; contador++){ //para aumentar el contador por más de uno se escribe: contador= contador+2
  //inicio, condición para terminar y actualización del valor del contador
  console.log(contador)
}
//Imprime hasta el 4 porque 5 no es menor que 5.

//Imprime hasta el 5 porque 5 es menor que 6.
for (var contador=1; contador<6; contador++){ //para aumentar el contador por más de uno se escribe: contador= contador+2
    //inicio, condición para terminar y actualización del valor del contador
    console.log(contador)
  }
  
  //Imprime hasta el 5 porque 5 es igual que 5.
for (var contador=1; contador<=6; contador++){ //para aumentar el contador por más de uno se escribe: contador= contador+2
    //inicio, condición para terminar y actualización del valor del contador
    console.log(contador)
  }
  
  //Tareas para practicar los ciclos
//a)
  for (var contador=1; contador<=100; contador=contador+5){ //para aumentar el contador por más de uno se escribe: contador= contador+2
    //inicio, condición para terminar y actualización del valor del contador
    console.log(contador)
  }
//b)
var contador = 1;
while(contador<=1000){
    //repetir estos pasos mientras la condición se cumpla
console.log("Hola Mundo")
contador = contador + 1
//Muestra el 6 por el contador pero no cuenta
}
//c)
for (var contador=1; contador<=1000; contador++){ //para aumentar el contador por más de uno se escribe: contador= contador+2
    //inicio, condición para terminar y actualización del valor del contador
    console.log("Hola Mundo")
}
//d)
var suma = 4+3
var resultado=7
while(suma== resultado){
    //repetir estos pasos mientras la condición se cumpla
console.log("El resultado es 7")
contador = contador++
}
//e)
for (var contador=1; contador=1; contador++){ //para aumentar el contador por más de uno se escribe: contador= contador+2
    //inicio, condición para terminar y actualización del valor del contador
    console.log("Hola Mundo")
}
//f)- BUCLE INFINITO CON IF??
