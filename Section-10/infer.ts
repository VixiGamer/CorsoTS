//! S10 - L131 - 132 | infer

function add(a: number, b: number) {
    return a + b
}

type AddFn = typeof add
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never

type AddFnReturnValueType = ReturnValueType<AddFn>
