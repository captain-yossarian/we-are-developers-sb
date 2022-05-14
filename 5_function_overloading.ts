const cond = <T,>(arg: T): T extends number ? string : T =>
    typeof arg === 'number' ? arg.toString() : arg // expected error


/**
 * 
 * No error, because overloaded function signatures are bivariant
 */
function conditional<T,>(arg: T): T extends number ? string : T
function conditional<T,>(arg: T) {
    return typeof arg === 'number' ? arg.toString() : arg
}
conditional(1) // string
conditional('str') // 'str'


