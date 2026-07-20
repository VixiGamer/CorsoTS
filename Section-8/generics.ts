//! S8 - L101 a 108 | Genetic Type

//§ L 101 - 102
//^ Si puo scrivere in vri modi
let names = ["Viggo", "Silas", "Ofelia"]
let names1: string[] = ["Viggo", "Silas", "Ofelia"]

let names2: Array<string> = ["Viggo", "Silas", "Ofelia"]    //^ Questo e un 'Generic Type'
//? 'Generic Types' are combinations of types and it's about building flexible things and describing flexible types

//§ L103
//^ Custum Genetic Type
//? Stiamo creando un tipo oggetto dove la chiave deve esssere di tipo stringa,
//? e il valore sara deciso quando si crea una variabbile, ecc..., che si metterà tra '<>', Es: DataStore<string | boolean>,
//? così sara che il valore sara di tipo stringha o boleano. Questo serve per creare tipi flessibbili
type DataStore<T> = {
    [key: string]: T
}

let store: DataStore<string | boolean> = {}
store.name = "Max"
store.isInstuctor = true

//§ L104 | Generics Functions
//^ Se usiamo 'any' il tipo di ritorno sarà any e non potremmo usare l'autocompletamento perché appunto e any
function merge(a: any, b: any) {
    return [a, b]
}

//^ Se invece usiamo '<T>' i tii si adatteranno al tipo dio valori che gli passiamo nei parametri
function merge1<T>(a: T, b: T) {
    return [a, b]
}

const any = merge(1, 2)     // function merge(a: any, b: any): any[]
const t = merge1(1, 2)     // function merge1<number>(a: number, b: number): number[]
//const t1 = merge1(1, "Viggo")     //! ERRORE: DEVONO ESSERE TUTTI E DUE DEI NUMERI

//§ L105 | Multiple Generic Parameters
//? Si possono usare più tipi generici
function merge2<T, U>(a: T, b: U) {
    return [a, b]
}
const t2 = merge2(1, "Viggo")       //* Adesso si puo fare perché abbiamo 2 tipi generici

//§ L106 - 107 | Generics & Constraints
//& Se usiamo solo un parametro generico
function mergeObj<T extends object>(a: T, b: T) {   //^ Qui stiamo dicendo che il tipo che deve usare è qualche tipo di oggetto
    return {...a, ...b}
}
//const merged = mergeObj(1, 2)     //! ERRORE: i valori devono essere un tipo di oggetto
const merged1 = mergeObj({name: "Viggo"}, {age: 22})

/*
    Tipo:
    function mergeObj<{
    name: string;
    age?: undefined;
    } | {
    age: number;
    name?: undefined;
    }>(a: {
    name: string;
    age?: undefined;
    } | {
    age: number;
    name?: undefined;
    }, b: {
    name: string;
    age?: undefined;
    } | {
    age: number;
    name?: undefined;
    }): {
    name: string;
    age?: undefined;
    } | {
    age: number;
    name?: undefined;
    }
*/

//& Se usiamo 2 parametri generici
function mergeObj1<T extends object, U extends object>(a: T, b: U) {   //^ Qui stiamo dicendo che il tipo che deve usare è qualche tipo di oggetto
    return {...a, ...b}
}
const merged2 = mergeObj1({name: "Viggo"}, {age: 22})
/*
    Tipo:
    function mergeObj1<{
    name: string;
    }, {
    age: number;
    }>(a: {
    name: string;
    }, b: {
    age: number;
    }): {
    name: string;
    } & {
    age: number;
    }
*/
//^ Come possiamo vedere questo tipo e molto più corto se utiliziamo 2 tipi generici

//§ L108 | Generic classes
//^ Prima (Senza il generico)
class User {
    constructor(public id: string | number | object) { }
}

//^ Dopo (Con il generico)
class User1<T> {
    constructor(public id: T) { }
}
const user = new User("Viggo")
