//! S10 - L126 | mapped types

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
