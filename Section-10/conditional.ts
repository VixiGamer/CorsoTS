//! S10 - L129 - 130 | Conditional Types

//§ L129
type StringArray = string[]
type ElementType<T extends any[]> = T[number]

type Example1 = ElementType<StringArray>

let text = 1
//type Example2 = ElementType<typeof text>    //! ERRORE: Non puo essere un numero, deve essere un array di qualsiasi cosa


type GetElemetType<T> = T extends any[] ? T[number] : never     //^ Se T e un array di qualcosa, allora ..., altrimenti never

type Example3 = GetElemetType<StringArray>
type Example4 = GetElemetType<typeof text>

//§ L130
type FullNamePerson = {
    firstName: string,
    lastName: string
}
type FullNameorNothing<T> = T extends FullNamePerson ? string : never

function getFullname<T extends object>(person: T): FullNameorNothing<T> {
    if ("firstName" in person && "lastName" in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}` as FullNameorNothing<T>
    }
    throw new Error("No firstname adn/or lastname found!")
}


const name1 = getFullname({})
const name2 = getFullname({ firstName: "Viggo", lastName: "Ponturo Nygaard" })