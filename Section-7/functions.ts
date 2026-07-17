//! S7 - L94 - 95

//^ Qui stiamo dicendo che se il valore che mettiamo in 'getLength' è una stringa allora il tipo di ritorno sarà stringa.
//^ Se invece sarà un array di qualcosa, allora il suo tipo di ritorno sarà un Numero.
function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
    if (typeof val === "string") {
        const numberOfWords = val.split(" ").length
        return `${numberOfWords} words`
    }
    return val.length
}

const numOfWords = getLength("Viggo ama i maccheroni con la salsa e polpette")
numOfWords.length;

const numOfItem = getLength(["prova", "prova", "prova", "prova", "prova", "prova"])