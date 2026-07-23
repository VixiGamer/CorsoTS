//! S10 - L126 - 127 | mapped types
//§ L126
type Operations = {
    add: (a: number, b: number) => number
    subtract: (a: number, b: number) => number
}

//^ Mapped type - qui stiamo facendo che tutte le chiavi di un oggetto siamo le stesse di questo e che ritornino number
type Results<T> = {
    [K in keyof T]: number
}


let mathOperations: Operations = {
    add(a: number, b: number) {
        return a + b
    },
    subtract(a: number, b: number) {
        return a - b
    },
}


let mathResults: Results<Operations> = {    //^ Cosi ts capira che 'mathResults' dovra essere un tipo oggetto di 'Results' che conterra tutte le chiavi di 'Operations'
    add: mathOperations.add(2, 2),
    subtract: mathOperations.subtract(2, 2)
}

//§ L127
type Operations1 = {
    add?: (a: number, b: number) => number           //^ Ora quetsa proprietà e opzionale
    subtract?: (a: number, b: number) => number      //^ Ora quetsa proprietà e opzionale
}

type Results1<T> = {
    [K in keyof T]-?: number      //^ '-?' serve per rimuovere l'opzionalità quando lavoriamo con mapped types
}

type Results2<T> = {
    readonly [K in keyof T]: number      //^ readonly per rendere la proprieta immuttabbile
}