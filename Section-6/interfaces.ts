//! S6 - L80 a 87

//^ Le interfaccie sono dei “contratti” che descrivono la struttura che un oggetto deve avere. 
//^ Servono a definire quali proprietà e metodi un oggetto deve contenere, senza specificare come vengono implementati.
interface Authenticatable {
    email: string
    password: string

    login(): void
    logout(): void
}

//^ Si possono creare 2 interfacce con lo stesso nome, poi typescript le unirà
interface Authenticatable {
    role: string
}

let user: Authenticatable;

user = {
    email: "vpn@gmail.com",
    password: "abc1234",
    role: "ADMIN",

    login() {
        console.log("LOGED IN!");
    },

    logout() {
        console.log("LOG OUT!");
    }
}


//^ Le interfacce si possono usare anche con le classi
class AuthenticatableUser implements Authenticatable {
    constructor(public email: string, public password: string, public role: string) {}

    login(): void {

    }

    logout(): void {
        
    }
}


function authenticate(user: Authenticatable) {
    user.login()
}

//^ Possiamo estendere un ainterfaccia da un altra interfaccia, come con le classi
interface AuthenticableAdmin extends Authenticatable {
    role: "admin" | "superadmin"
}