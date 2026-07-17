//! S6 - L69 a 72

// class User {
//     name = "Viggo";
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
// }

//^ Metodo più corto
class User {
    readonly  hobbies: string[] = []        //^ read only significa che la variabbile NON puo essere riasegnata

    constructor(public name: string, private age: number) {}

    greet() {
        console.log(`Hello I'm ${this.name} and I'm ${this.age}`);
    }
}

const viggo = new User("Viggo", 22)
console.log(viggo);