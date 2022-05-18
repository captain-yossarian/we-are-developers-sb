enum MyEnum {
    ONE, // 0
    TWO // 1
}

type Enumerate<Enum extends number | string> = `${Enum}`

type PseudoEnum = Record<string | number, string | number>

type Values<T> = T[keyof T]

type IsKeyValid<
    InitialValue extends number,
    Enum extends PseudoEnum
    > =
    `${InitialValue}` extends Enumerate<Values<Enum>>
    ? InitialValue
    : never

const handleEnum = <
    InitialValue extends number,
    >(
        value: IsKeyValid<InitialValue, typeof MyEnum>
    ) => { }

handleEnum(MyEnum.ONE) // ok
handleEnum(0) // ok
handleEnum(1) // ok

handleEnum(-1) // error
handleEnum(NaN) // error
handleEnum(Infinity); // error
handleEnum(0.0000001); // error
handleEnum(NaN); // error
handleEnum((-0 + 0)); // error
handleEnum(Math.PI); // error