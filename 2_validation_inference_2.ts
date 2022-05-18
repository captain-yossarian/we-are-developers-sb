type ErrorMessage<Text extends string | number> =
    `Property [${Text}] is forbidden`

// Remove it and write from scratch
type ForbidProperty<
    Obj extends Record<string, unknown>,
    ForbiddenProperty extends string | number
    > = {
        [Prop in keyof Obj]:
        Prop extends ForbiddenProperty
        ? ErrorMessage<ForbiddenProperty> // replace with error message
        : Obj[Prop] // leave as is
    }

// We want to forbid using [name]
const foo = <
    Prop extends PropertyKey,
    Value extends Json,
    Obj extends Record<Prop, Value>
>(obj: ForbidProperty<Obj, 'name'>) => obj

// 1) try any property with underscore
// 2) disallow using of error message as a value


foo({ email: 'hello@dome.com', name: 'John' })

// --------------> HOME WORK <--------------

// Throw TS error if any value in provided argument is 5

foo({ age: 5 }) // expect error
foo({ age: 6 }) // ok

// You can find more about validations here https://catchts.com/validators and here https://catchts.com/type-negation
