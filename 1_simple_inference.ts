// How we can infer literal type in TypeScript
// based on https://catchts.com/infer-arguments
{
    const foo = <Obj extends { prop: number }>(obj: Obj) => obj

    const result = foo({ prop: 42 }) // { prop: number }  < --------- not Ok
}
{
    const foo = <Prop extends number, Obj extends { prop: Prop }>(obj: Obj) => obj

    const result = foo({ prop: 42 }) // { prop: 42 }     < ---------- Ok
}
{
    // PropertyKey is built-in type, it is just a union of:       string|number|symbol
    const foo = <
        Prop extends PropertyKey,
        Value extends Json,
        Obj extends Record<Prop, Value>
    >(obj: Obj) => obj

    // { prop: 42, greet: 'hello' }
    const result = foo({ prop: 42, greet: 'hello', a: { b: { c: 'nested property' } } })
    // 1) Try to add deep nested property
}
