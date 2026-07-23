//! S10 - L128 | Template Literal Types

const mainUser = "Viggo"
const greet = `Hi there, ${mainUser}`

type ReadPermissions = "no-read" | "read"
type WritePermissions = "no-write" | "write"

type FilePermissions = `${ReadPermissions}-${WritePermissions}`
// type FilePermissions = "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write"

type DataFile = {
    data: string,
    permissions: FilePermissions
}

type DataFileEventNames = `${keyof DataFile}Changed`       //^ Prende i nomi delle proprieta di DataFile, ovvero 'data' e 'permissions'

type DataFileevents = {
    [Key in DataFileEventNames]: () => void
}