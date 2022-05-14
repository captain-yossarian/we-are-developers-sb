type Json =
    | null
    | string
    | number
    | boolean
    | Array<JSON>
    | {
        [prop: string]: Json
    }

type Primitives =
    | string
    | number
    | bigint
    | boolean
    | symbol
    | null
    | undefined