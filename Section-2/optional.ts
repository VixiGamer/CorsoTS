//! S2 - L38-39

//§ L38 | Optional values
function generateError(msg?: string) {
    throw new Error(msg);
}

generateError();

type User2 = {
    name: string,
    age: number,
    role?: "admin" | "guest"
}

//§ L39 | Nullish coalescing operator '??'
let input = null
const didProvideInput = input ?? false  //^ '??' controlla se il valore a sinistra e null o undefined