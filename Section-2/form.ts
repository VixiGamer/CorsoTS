//! S2 - L35-36

const inputEl = document.getElementById("user-name") as HTMLInputElement | null;
//^ Qui stiamo dicendo che 'getElementById' ritornera un elemento di tipo 'HTMLInputElement' o 'null'

if (!inputEl) {
    throw new Error("Element not found!")
}

console.log(inputEl?.value);