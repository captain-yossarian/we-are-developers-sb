/**
 * Very popular question: 
 * Why this code does not work
 * 
 * Answer:
 * TS just does not support conditional type as an explicit return type
 */
const cond = <T,>(arg: T): T extends number ? string : T =>
    typeof arg === 'number' ? arg.toString() : arg // expected error

/**
 * In order to fix it we need to overload our function or add type assertion
 * 
 * No error, because overloaded function signatures are bivariant
 */
function conditional<T,>(arg: T): T extends number ? string : T
function conditional<T,>(arg: T) {
    return typeof arg === 'number' ? arg.toString() : arg
}

conditional(1) // string
conditional('str') // 'str'

export { }

