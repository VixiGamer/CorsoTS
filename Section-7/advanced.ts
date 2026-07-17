//! S7 - L96 a 

//^ Index Types
type DataStore = {
    [prop: string]: number | boolean    //^ prop e un placeholder
}

//^ Record type
let someObj: Record<string, number | boolean>;  //^ Questo e DataStore sono la stessa cosa

let store: DataStore = {}


//^ as const
store.id = 5
store.isOpen = false
let roles = ["admin", "guest", "editor"] as const;


//^ satisfies
//^ satisfies serve a verificare che un valore rispetti un certo tipo senza cambiare il tipo inferito del valore stesso.
const dataEntries = {
    entry1: 0.5,
    entry2: -1.1
} satisfies Record<string, number>;

//dataEntries.entry3