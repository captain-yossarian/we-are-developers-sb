enum MyEnum {
    ONE, // 0
    TWO // 1
}

const handleEnum = (
    value: MyEnum
) => { }

handleEnum(MyEnum.ONE) // ok
handleEnum(0) // ok
handleEnum(1) // ok

// UNSAFE
handleEnum(-1)
handleEnum(NaN)
handleEnum(Infinity);
handleEnum(0.0000001);
handleEnum(NaN);
handleEnum((-0 + 0));
handleEnum(Math.PI);

export { }