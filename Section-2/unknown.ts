//! S2 - L37 | unknown

//^ Usare 'unknown' ti forza tu sviluppatore a aggiungere piu livelli di sicurazza
function process(val: unknown) {
    if (typeof val === "object" && !!val && "log" in val && typeof val.log === "function") {    //? Il !!val serve per vedere se e truty
        val.log()
    }
}