/* esercizio 1: crea una funzione che restituisca true se 2 numeri sommati fanno 50 oppure se uno dei due è uguale a 50 */ 

let num1 = 10
let num2 = 10
const funzione1 = function (num1, num2) {
    if(num1 + num2 === 50 || num1 === 50 || num2 === 50){
        console.log(true)
    } else {
        console.log(false)
    }
}
funzione1(num1,num2)

/* esercizio 2: funzione che elimini un carattere da una stringa e ritorni la stringa modificata */

let str = "prova funzione 2"
let num3 = 5
const funzione2 = function (str,num3){
    lecters = str.split(``)
    lSpliced = lecters.splice((num3 -1), 1)
    newString = lecters.join(` `)
    console.log(newString)
}

funzione2(str, num3)

/* esercizio 3: funzione che controlla se due numeri sono compresi tra 40 e 60 o tra 70 e 100*/

let num4 = 41
let num5 = 72

const funzione3 = function(num1,num2){
    if ( (num1  > 40  && num1 < 60 || num1 > 70 && num1 < 100) && (num2  > 40  && num2 < 60 || num2 > 70 && num2 < 100) ){
        console.log(true)
    } else {
        console.log(false);
    }
}
funzione3(num4,num5)

/* esrcizio 4: funzione che ritorni nome di città se inizia con Los o New oppure false */

let testFunzione4 = "New Amsterdam"

const funzione4 = function(str){
    if (str.startsWith("Los") || str.startsWith("New")){
        console.log(str)
    } else {
        console.log(false);
    }
}

funzione4(testFunzione4)

/* esercizio 5: funzione che somma tutti gli elementi di un array*/

const funzione5 = function(arr){
    sum = 0
    for (const element of arr) {
       sum += element
    }
    console.log(sum)
}

const myArray = [0,0,2,2,0,0,0,5,4]

funzione5(myArray)

/* esercizio 6: funzione che controlla che gli elementi di un array non contengano 1 o 3*/

const funzione6 = function(arr){
    if(arr.includes(1) || arr.includes(3)){
        console.log(false)
    }else{
        console.log(true)
    }
    }


funzione6(myArray)

/* esercizio 7: funzione che ritorni il valore di un angolo (acuto, ottuso ...) */

const funzione7 = function(num){
    if (num > 0 && num < 90){
        console.log("acuto")
    } else if (num === 90){
        console.log("retto")
    } else if (num > 90 &&  num < 180){
        console.log("ottuso")
    } else if (num === 180 ) {
        console.log("piatto")
    }else if (num > 180 && num < 360){
        console.log("concavo")
    }else if (num === 360){
        console.log("giro")
    } else {
        console.log("valore non valido")
    }
}

let angolo = 55

funzione7(angolo)

/* esercizio 8: funzione che ritorni un acronimo */

const funzione8 = function(str){
    let arraySingleWord = str.split(` `)
    acron = ``
    for (const singleWord of arraySingleWord) {
        acron += singleWord.charAt(0)
        acronUp = acron.toUpperCase()
    }
    console.log(acronUp)
}

funzione8 (`fabbrica italiana automobili torino`)

/* esercizio extra1: funzione che inserita una stringa ritorni il carattere più usato*/

const funzione9 = function(str){
    let strLower = str.toLowerCase()
    let lecters = strLower.split(``)
    let highestFrequency  = 0
    for (const lecter of lecters) {
        amount = strLower.split(lecter).length -1
        if (amount > highestFrequency) {
            mostUsedLetter = lecter
            highestFrequency = amount
        }
    }
    console.log(mostUsedLetter)
}
let myString = "Aiiiia"

funzione9(myString)

/* esercizio extra2: funzione che controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. */

const funzione10 = function(str1,str2){
    let str1ToLower = str1.toLowerCase()
    let str2ToLower = str2.toLowerCase()
    if (str1ToLower.split(``).sort().join(``) === str2ToLower.split(``).sort().join(``)){
        console.log(true)
    } else {
        console.log(false)
    }
}

let strAnagram1 = "coniglio"
let strAnagram2 = "coglioni"
funzione10 (strAnagram1,strAnagram2)

/* extra 3: funziome che partendo da una lista di possibili anagrammi e da una parola, ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data. */

const funzione11 = function(arr,str){
    finalArray = []
    for (const possibleAnagram of arr) {
        if (possibleAnagram.toLowerCase().split(``).sort().join(``) === str.toLowerCase().split(``).sort().join(``)){
            finalArray.push(possibleAnagram)
        }
    } 
    console.log(finalArray);
}

let anagramArray = [`coglioni`,`glionico`,`conigli`,`anatra`]
let anagramTest = `coniglio`

funzione11(anagramArray, anagramTest)

/* extra 4: funzione che partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.*/

const funzione12 = function(str){
    strPalToLower = str.toLowerCase() 
    strReverseToLower = str.toLowerCase().split(``).reverse().join(``)
    if (str.toLowerCase() === str.toLowerCase().split(``).reverse().join(``)){
        console.log(true)
    } else {
        console.log(false)
    }
}

paliTest = `Racecar`
funzione12(paliTest)

/* extra 5: funzione che ritorni un numero intero ma invertito */

const funzione13 = function(num){
    result = num.toString().split(``).reverse().join(``)
    console.log(result) 
}

test13Number = 1223
funzione13(test13Number)

/* extra 6: funzione che crea "gradini di #"" partendo da un numero */

const funzione14 = function(num) {
    if (num < 0){
        console.log(false)
    }else {
    for ( i = 0; i <= num; i++ ) {
        console.log(`#`.repeat(i))
    }
}
}

x = 1
funzione14(x)

/* extra 7: funzione che ritorni una stringa al contrario*/

const funzione15 = function(str){
    strReverse = str.split(``).reverse().join(``)
    console.log(strReverse)
}

test15 = `Ciao`
funzione15(test15)

/* extra 8: funzione che ricevi un array e un numero e dividi l'array in sotto array lunghi quel numero*/

const funzione16 = function(arr,num){
    const newArray = [];
    for (let i = 0; i < arr.length; i += num) {
      chunk = arr.slice(i, i + num);
      newArray.push(chunk);
    }
    console.log(newArray);
  }

  arrayTest16 = [0,1,2,3,4,5,6,7,8,9]
  testNum16 = 3

  funzione16(arrayTest16,testNum16)

  /* extra 9: funzione */

  const funzione17 = function(num){
    if (num <0){
        console.log(`negative number`)
    }
  }