//! S6 - L73 a 78
class User1 {
    constructor(protected _firstName: string, protected _lastName: string) { }

    set firstName(fn: string) {
        if (fn.trim() === "") throw new Error("Invalid first")
        this._firstName = fn
    }
    set lastName(ln: string) {
        if (ln.trim() === "") throw new Error("Invalid last name")
        this._lastName = ln
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }

    //^ Lo 'static' rende che le variabbili/funzione siano accessibbili anche se non si crea un istanza di User
    static id = "USER"
    static greet() {
        console.log("Hello!");
    }
}

console.log(User1.id);

const viggo1 = new User1("Viggo", "Ponturo Nygaard")
console.log(viggo1.fullName);



class Employee extends User1 {
    constructor(public jobTitle: string) {
        super("Default", "Default")
    }

    work() {
        console.log(this._firstName);
    }
}


//^ Le classi astratte servono non per creare istanze di quella classe, ma usarle per si che dipendono da altre classi
abstract class UIElement {
    constructor(public identifier: string) { }

    clone(targetElement: string) {

    }
}

class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: "left" | "right") {
        super(identifier);
    }
}