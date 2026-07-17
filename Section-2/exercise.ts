//! Esercizio Riepilogativo della Sezione 2

// L'obiettivo di questo esercizio è consolidare tutti i concetti della Sezione 2.
// Creeremo un piccolo sistema di gestione per gli utenti di un blog e i loro post.

// 1. String Literal & Type Aliases (L27, L28)
// Definisci un type alias `UserRole` che possa essere solo uno dei seguenti valori: 'admin', 'editor', 'author', 'guest'.

type UserRole = 'admin' | 'editor' | 'author' | 'guest';


// 2. Object Types & Optional Properties (L23, L38)
// Definisci un type alias `User` per un oggetto che rappresenti un utente.
// - id: un numero.
// - username: una stringa.
// - email: una stringa.
// - role: deve usare il tipo `UserRole` che hai appena creato.
// - lastLogin: un oggetto `Date` o `undefined` (proprietà opzionale).
// - posts: un array di oggetti `Post` (che definiremo tra poco).

type User3 = {
    id: number
    username: string
    email: string
    role: UserRole
    lastLogin: Date | undefined
    posts: Post[]
}


// 3. Tuples & Union Types (L18, L22)
// Definisci un type alias `PostStatus` che sia una tupla.
// Il primo elemento deve essere lo stato del post: 'draft', 'published', o 'archived'.
// Il secondo elemento deve essere un `Date` che rappresenta l'ultima modifica.

type PostStatus = ['draft'| 'published' | 'archived', Date]



// 4. Object Types & Array Types (L19, L23)
// Definisci un type alias `Post` per un oggetto che rappresenti un post del blog.
// - title: una stringa.
// - content: una stringa.
// - tags: un array di stringhe.
// - status: deve usare il tipo `PostStatus`.

type Post = {
    title: string
    content: string
    tags: string[]
    status: PostStatus
}



// 5. Creazione di Dati (L13, L15, L19, L23)
// Crea un utente `adminUser` di tipo `User` con il ruolo 'admin'.
// Assegnagli almeno un post. Ricorda di creare prima l'oggetto Post.

const adminUser: User3 = {
    id: 1,
    username: "Viggo",
    email: "vpn@gmail.com",
    role: "admin",
    lastLogin: undefined,
    posts: [{
        title: "DK",
        content: "Finalmente in vacanza a casa. DK :D",
        tags: ["Danimarca", "Vacanza"],
        status: ["published", new Date("01/03/2004")]
    }]
}



// 6. Functions, Return Types & Callbacks (L29, L30, L32)
// Scrivi una funzione `logUserAction` che accetta due parametri:
// - `user`: un oggetto di tipo `User`.
// - `callback`: una funzione che prende un messaggio (stringa) e non restituisce nulla (void).
// La funzione deve invocare il callback con un messaggio che include lo username e il ruolo dell'utente.


function logUserAction(user: User3, callback: (msg: string) => void) {
    callback(`${user.username} ${user.role}`)
}

logUserAction(adminUser, console.log);



// 7. Functions with `never` & Optional Parameters (L31, L38)
// Scrivi una funzione `reportError` che:
// - Accetta un parametro opzionale `details` di tipo stringa.
// - Lancia sempre un errore.
// - Usa il tipo di ritorno `never`.
// - Usa l'operatore Nullish Coalescing (??) per fornire un messaggio di default se `details` è null o undefined.


function reportError(msg?: string): never {
    throw new Error(msg ?? "C'è stato un errore")
}

reportError("Impossibile connettersi al database.");
reportError();




// 8. `unknown` type & Type Guards (L37)
// Scrivi una funzione `processInput` che accetta un valore di tipo `unknown`.
// La funzione deve comportarsi diversamente in base al tipo di input:
// - Se è un numero, stampa "Input è un numero: [valore]".
// - Se è una stringa, stampa "Input è una stringa: [valore]".
// - Altrimenti, chiama la funzione `reportError` con un messaggio appropriato.

function processInput(val: unknown) {
    if (typeof val === "number") {
        console.log(`Input è un numero: ${val}`);
        return
    }
    if (typeof val === "string") {
        console.log(`Input è una stringa: ${val}`);
        return
    }
    reportError(`ERRORE: L'input e di tipo ${typeof val}`)
    return
}

processInput(100);
processInput("Ciao mondo");
processInput({ data: "test" });

// 9. Record Type (L25)
// Definisci una variabile `userSettings` usando `Record`.
// Le chiavi devono essere stringhe e i valori possono essere stringhe, numeri o booleani.
// Inizializzala con alcune impostazioni per l'utente.


let userSettings: Record<string, string | number | boolean>

userSettings = {
    name: "Viggo",
    age: 22,
    loggedIn: true,
    //hobbies: ["gaming", "cooking", "wathcing tv shows"]   //! ERRORE
}



console.log("Esercizio pronto! Completa le parti mancanti.");