//! S2 - L17 - 18

//§ L17 | any
//^ any si dovrebbe utilizzare come ultima risorsa
let age: any = 21       //^ Il type any accetta qualsiasi valore

age = "22"
age = false;
age = {};
age = [];

//§ L18 | union

let age1: number | string = 22

age1 = "23"
age1 = 23
//age1 = true       //! ERROR