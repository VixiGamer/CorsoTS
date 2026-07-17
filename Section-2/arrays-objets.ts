//! S2 - L19 a 25

//§ L19
let hobbies = ["sports", "cookings"]    //^ tipo per inferenza: ': string[]'

//hobbies.push(2)   //! ERROR
hobbies.push("gaming")

//§ L20
let users: (string | number)[];     //^ This will be an array of strings, numbers or both

users = [1, "Viggo"]
users = [1, 2]
users = ["Silas", "Viggo"]

//§ L21
//^ Sono la stessa cosa
let users1: (string | number)[];
let users2: Array<string | number>;

//§ L22 | Tuple
let possibleResults: [number, number]     //^ Questo array avra una lunghezza di 2 elmenti di tipo number

possibleResults = [1, -1]
//possibleResults = [5, 10, 12]       //! ERROR: perché ci sono 3 elementi che si voilgiono pushare

//§ L23 | Object Types
let user3: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    };
} = {
    name: "Viggo",
    age: 22,
    hobbies: ["gaming"],
    role: {
        description: "Manager",
        id: 1
    }
};

//§ L24
let val: {} = "some text";
//^ {} non significa che deve essere un oggetto vuoto, ma che può essre qualsiasi valore che non sia 'undefined' o 'null'

val = 2
val = true
val = {}
//val = null    //! ERROR

//§ L25 | Record Type
//^ Il tipo Record e praticamnete un tipo che dico che sara un oggeto che specifico anche i tipi delle chiavi e i valori
//^ Record<tipoChiavi, tipoValori>
let data: Record<string, number | string>

data = {
    entry1: 1,
    entry2: "2"
}