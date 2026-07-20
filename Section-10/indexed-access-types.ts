//! S10 - L124 - 125 | indexed access type

//§ L124
const appUser = {
    name: "Viggo",
    age: 35,
    permissons: [{id: "p1", title: "Admin", description: "Admin access!"}]
}

const AppUser1 = typeof appUser;

//^ questi due sono la stessa cosa

type AppUser = {
    name: string,
    age: number,
    permissions: {
        id: string,
        title: string,
        description: string
    }[]     // Un array di oggetti '[{}, {}, {}, ...]'
}

type Perms = AppUser["permissions"]         //^ Se lo prendi da un tipo
type Perms1 = typeof appUser.permissons     //^ Se lo prendi da un oggetto

//§ L125
type Perm = Perms[number]