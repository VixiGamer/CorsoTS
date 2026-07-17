//! S2 - L29 a 32

//§ L29
function add1(a: number, b: number): number {   //^ Il '): number {' e il tipo di ritorno della funzione
    return a + b
}

//§ L30 | void
function log(message: string) {     //^ Il tipo di ritorno di questa funzione e 'void'. (Perche non ce il return)
    console.log(message);
}

//§ L31 | never
//^ Gli mettiamo il tipo di ritorno a never, perché non finisce mai perché facciamo 'throw new Error(errorMessage)'
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage)
}

//§ L32
function performJob(cb: (msg: string) => void) {       //^ Qui diciamo che 'cb' sarà una funzione che ritorna void, e che ha com parametro 'm'
    // ...
    cb("Job done!");
}

performJob(log);

type User = {
    name: string,
    age: number,
    greet: () => string     //^ Deve ritornare una stringha
}


let viggo: User = {
    name: "Viggo",
    age: 22,
    greet() {
        console.log("Hello there!");
        return this.name
    },
}

viggo.greet(); 