const COUNTRIES = [
    'Poland',
    'USA',
    'UK',
    'Lithuania',
    'Latvia',
    'Estonia',
    'Ukraine'
] as const;
// 2 -> number
type BackwardInference<T, P> =
    P extends any ? T extends P ? P : never : never;

type Generalize<T> = BackwardInference<T, Primitives>

const withTuple = <
    List extends Primitives[]
>(list: readonly [...List]) =>
    (prop: Generalize<List[number]>):
        prop is Generalize<List[number]> & List[number] =>
        list.includes(prop)

const includes = withTuple(COUNTRIES);

includes(2)       // expected error
includes(true) // expected error

const result = includes('d') // ok

declare let str: string

if (includes(str)) {
    str // "a" | "b" | "c"
}