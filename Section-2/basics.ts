//! S2 - L13-15-16

//§ L13-15
let userName: string;
let userAge = 22;       //^ Puoi fare sempre ': number' per specificare il tipo ma non ce bisogno perché lo prende gia per inferenza

userName = "Viggo";
//userName = 3          //! ERROR: Type 'number' is not assignable to type 'string'
//userAge = "23"        //! ERROR: Type 'string' is not assignable to type 'number'

//§ L16
function add(a: number, b = 5) {        //^ 'b' prende il tipo per inferenza
    return a + b
}

add(10)     // 15
add(10, 6)  // 16
//! ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
//add("10")
//add(10, "6")
