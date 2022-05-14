
const PROPS = ['a', 'b', 'c'] as const;

type InferPrimitive<T, P> = P extends any ? T extends P ? P : never : never;

type Inference<T> = InferPrimitive<T, Primitives>

{
    type _ = Inference<2 | 's'> // stirng | number
    type __ = Inference<42> //  number
}

const withTuple = <
    List extends Primitives[]
>(list: readonly [...List]) =>
    (prop: Inference<List[number]>):
        prop is Inference<List[number]> & List[number] =>
        list.includes(prop)

const includes = withTuple(PROPS);

includes(2)       // expected error
includes(['str']) // expected error

const result = includes('d') // ok

declare let str: string

if (includes(str)) {
    str // "a" | "b" | "c"
}