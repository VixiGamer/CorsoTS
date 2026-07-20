const users = [
    { id: 1, name: 'Viggo' },
    { id: 2, name: 'Silas' },
    { id: 3, name: 'Ofelia' }
];

function arrayToMap<T extends Record<string, any>, K extends keyof T>(items: T[], key: K): Record<string, T> {
    const result: Record<string, T> = {};
    items.forEach(item => {
        const mapKey = String(item[key]);
        result[mapKey] = item;
    });
    return result;
}


const usersMap = arrayToMap(users, 'id');



class State<T> {
    constructor(private initialState : T) { }

    getState(): T {
        return this.initialState
    }

    setState(newState: T): void {
        this.initialState = newState
        return
    }
}

const numberState = new State(10);
console.log(numberState.getState()); // 10
numberState.setState(20);
console.log(numberState.getState());

const userState = new State({ name: 'Ofelia' });
console.log(userState.getState()); // { name: 'Ofelia' }
userState.setState({ name: 'Viggo' });
console.log(userState.getState());



function combine<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const nameObj = { name: 'Viggo' };
const ageObj = { age: 22 };

const combined = combine(nameObj, ageObj);
console.log(combined);

