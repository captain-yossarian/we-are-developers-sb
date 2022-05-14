type Coordinates = `${number},${number};`;


/**
 * Obtains last element in the tuple
 */
type Last<T extends string[]> = T extends [...infer _, infer Last] ? Last : never;

/**
 * Concats Coordinates to the last element in the tuple
 */
type ConcatPrevious<T extends any[]> = Last<T> extends string ? `${Last<T>}${Coordinates}` : never

/**
 * Creates required union
 */
type Repeat<
    N extends number,
    Result extends Array<unknown> = [Coordinates],
    > =
    (Result['length'] extends N
        ? Result[number]
        : Repeat<N, [...Result, ConcatPrevious<Result>]>
    )

type MyLocation = Repeat<2>

const myLocation1: MyLocation = '02,56;67,68;' // ok
const myLocation2: MyLocation = '45,56;67,68;1,2;' // error, to much
const myLocation3: MyLocation = '45,56;67,68;1,2' // expected error, no semicolon

/**
 * More information you can find here https://catchts.com/even-length#recursive_pattern 
 */