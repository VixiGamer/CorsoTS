//! S10 - L119 - 120 | typeof

const username = "Viggo"
console.log(typeof username);

type Username = typeof username     // type Username = "Viggo"

const settings = {
    diff: "easy",
    minLevel: 10,
    didStart: true,
    players: ["Vixi", "Sili"]
}

type Settigs = typeof settings
/*
    type Settigs = {
        diff: string;
        minLevel: number;
        didStart: boolean;
        players: string[];
    }
*/

function loadData(s: typeof settings) {
    // ...
}

loadData(settings)
