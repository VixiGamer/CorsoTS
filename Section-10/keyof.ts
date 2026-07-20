//! S10 - L122 - 123 | keyof

//§ L122
type User = { name: string, age: number }
type UserKeys = keyof User

let validKey: UserKeys

validKey = "name"
validKey = "age"

//§ L123
function getProp<T extends object, U extends keyof T>(obj: T, key: U) { //^ Qui stiamo dicendo che 'U' estende le chiavi del oggetto U
    const val = obj[key]
    if (val === undefined || val === null) throw new Error("Accessing undefined or null value")
    return val
}

const user = { name : "Viggo", age: 22, city: "Taormina" }

const val = getProp(user, "name")