type ComputeRange<
    N extends number,
    Result extends Array<unknown> = [],
    > =
    (Result['length'] extends N
        ? [...Result, Result['length']][number]
        : ComputeRange<N, [...Result, Result['length']]>
    )
// Weird syntax -------> [...Result, Result['length']
{
    type Tuple = [0, 1, 2]
    type AddLength = [...Tuple, Tuple['length']] // [0, 1, 2, 3]
}

type Octal = ComputeRange<255> // 0 .. 255

const rgb = (r: Octal, g: Octal, b: Octal) => { }

rgb(2, 56, 255) // ok
rgb(0, 0, -1) // expected error

// Does not work

/**
 * Expression produces a union type that is too complex to represent.
 * Because union has 16_581_375, whereas TS supports near 100_000 elements in a union
 * For instance ComputeRange<45> is supported and ComputeRange<46> is not
 */
type RGB = `${Octal}.${Octal}.${Octal}`


