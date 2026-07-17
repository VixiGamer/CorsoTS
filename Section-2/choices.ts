//! S2 - L26 a 28

//§ L26 | Enums
/*
enum Role {
    Admin,
    Editor = 2,
    Guest = "Guest",
}

let userRole: Role = 0
userRole = Role.Admin
*/

//^ JS
/*
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = 0;
userRole = Role.Admin;
*/

//§ L27
let userRole: "admin" = "admin"       //^ "admin" in qeusto caso non e una stringha ma un tipo
let userRole1: "admin" | "editor" | "guest" = "guest"       //^ In questo caso userRole1 può essere di tipo "admin", "editor" o "guest", nient'altro

let possibleResults1: [1 | -1, 1 | -1]   //^ Qui stiamo dicendo che il primo valore dell'array puo essere 1 o -1, e la stessa cosa per il secondo
possibleResults1 = [1, -1]
//possibleResults = [5, 1]    //! ERROR

//§ L28
type Role = "admin" | "editor" | "guest" | "reader"     //^ Qui creo il mio 'Type'
type User1 = {
    name: string
    age: number
    role: Role
    permission: string[]
}

function access(role: Role) {
    
}