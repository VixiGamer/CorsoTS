//! S7 - L90 a 93

//§ L90
/*
type FileSource = { path: string };
const fileSource: FileSource = {
    path: "prova/prova/prova.ts"
}

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
    connectionUrl: "url.com"
}

type Source = FileSource | DBSource


function loadData(source: Source) {
    if ("path" in source) {
        // source.path; => use that to pen the file
        return
    }
    // source.connectionUrl; => to reach out to the database
}
*/

//§ L91 | Discriminate union pattern
//^ Another way for cheaking another values type
type FileSource = { type: "file", path: string };
const fileSource: FileSource = {
    type: "file",
    path: "prova/prova/prova.ts"
}

type DBSource = { type: "db", connectionUrl: string };
const dbSource: DBSource = {
    type: "db",
    connectionUrl: "url.com"
}

type Source = FileSource | DBSource


function loadData(source: Source) {
    if (source.type === "file") {
        // source.path; => use that to pen the file
        return
    }
    // source.connectionUrl; => to reach out to the database
}


//§ L92
class User {
    constructor(public name: string) {}
    
    join() {
        // ...
    }
}

class Admin {
    constructor(permissions: string[]) {}

    scan() {
        // ...
    }
}

const user = new User("Man")
const admin = new Admin(["ban", "restore"])

type Entity = User | Admin;

function init(entity: Entity) {
    // .join() or .scan()
    if (entity instanceof User) {   //^ Il valore che gli mettiamo e un istanza di User?
        entity.join()
        return
    }
    entity.scan()
    return
}