//! S11 - L136 a 144 | ECMAScript Decorators

//^ Un decorator e semplicemente una funzione
//& Class decorator
function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    //^ Class definition
    console.log("Logger Decorator");
    console.log(target);
    console.log(ctx);

    return class extends target{
        constructor(...args: any[]) {
            //^ Class instantiation
            super(...args)
            console.log("Class Constructor");
            console.log(this);
        }
    }
}

//& Method Decorator
function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
    ctx.addInitializer(function(this: any) {
        this[ctx.name] = this[ctx.name].bind(this)
    })
    return function() {
        console.log("Executing original function!");
        target();
    }
}


function replacer<T>(initValue: T) {
    //& Field Decorator
    return function replacerDecorator(target: undefined, ctx: ClassFieldDecoratorContext) {      //^ 'target' e undefined perché il decorator vera eseguito prima che field viene inizializzato
        console.log(target);
        console.log(ctx);

        return (initialValue: any) => {
            console.log(initialValue);
            return initValue
        }
    }
}





@logger
class Person {
    @replacer("")
    name = "Viggo"

    constructor() {
        this.greet = this.greet.bind(this)
    }
    
    @autobind
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

const viggo = new Person()
