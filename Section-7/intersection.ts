//! S7 - L89

//& INTERSECTIONS
type FileData = {
    path: string,
    content: string
};

type Status = {
    isOpen: boolean,
    errorMessage: string | undefined
};

type DatabaseData = {
    connectionUrl: string,
    credentials: string
}


type AccessedFileData = FileData & Status   //^ Ora questo tipo sara una tipo dove contiene le proprietà dei tipi 'FileData' e 'Status'
type AccesedDatabaseData = DatabaseData & Status