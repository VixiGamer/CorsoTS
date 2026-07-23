//! S12 - L147 a 160
//^ Un decorator e semplicemente una funzione che applichi a qualcosa (per esempio a una funzione) in un certo modo

function Logger(constructor: Function) {    //§ L147
    console.log("Logging...");
    console.log(constructor);
}

function Logger1(logString: string) {       //§ L148 | La trasformiamo in una factory
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}


function WithTemplate(template: string, hookId: string) {       //§ L149
    console.log("TEMPLATE FACTORY");
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T){      //^ This is the actual decorator
        // console.log("Rendering template");
        // const hookEl = document.getElementById(hookId)
        // const p = new originalConstructor();
        // if (hookEl) {
        //     hookEl.innerHTML = template     //^ My Person Object
        //     hookEl.querySelector("h1")!.textContent = p.name    //^ Viggo
        // }
        //§ L154
        //^ Qui sto ritornando una nuova classe che si basa sulla constructor function originale, 
        //^ cosi mantengo tutte le proprieta originali e poi qui dentro possiamo aggiungere nuove funzionalità
        return class extends originalConstructor{
            constructor(..._: any[]) {
                super();
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId)
                if (hookEl) {
                    hookEl.innerHTML = template     //^ My Person Object
                    hookEl.querySelector("h1")!.textContent = this.name    //^ Viggo
                }
            }
        }
    }
}


@Logger1("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
    name = "Viggo"

    constructor() {
        console.log("Creating person object...");
    }
}

// const pers1 = new Person()
// console.log(pers1);

//^ ---------------------------------------------------------

//§ L151
//^ Property decorator
function Log(target: any, propertyName: string | Symbol) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}

//^
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

//^ Method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

//^ Parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string
    private _price: number
    
    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error("Invalid price - shode be positive!")
        }
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    @Log3
    getPriceWithTaax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

const p1 = new Product("Heartstopper Vol 1", 10.99)
const p2 = new Product("Heartstopper Vol 2", 10.99)

function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
        }
    }
}

class Printer {
    message = "This works!"

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const btn = document.querySelector("button")!
btn.addEventListener("click", p.showMessage)


//§ L157
interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor] = {
        ...registeredValidators[target.constructor],
        [propName]: ["required"]
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor] = {
        [propName]: ["positive"]
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig) {
        return true
    }
    let isValid = true
    for (const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]){
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop]
                    break

                case "positive":
                    isValid = isValid && obj[prop] > 0
                    break
            
                default:
                    break;
            }
        }
    }
    return true
}

class Corse {
    @Required
    title: string
    @PositiveNumber
    price: number

    constructor(t: string, p: number) {
        this.title = t
        this.price = p
    }
}

const courseForm = document.querySelector("form")!
courseForm.addEventListener("submit", e => {
    e.preventDefault()

    const titleEl = document.getElementById("title") as HTMLInputElement
    const priceEl = document.getElementById("price") as HTMLInputElement
    
    const title = titleEl.value
    const price = Number(priceEl.value)

    const createdCourse = new Corse(title, price)
    
    if (!validate(createdCourse)) {
        alert("Invalid input!")
        return
    }
    console.log(createdCourse);
})