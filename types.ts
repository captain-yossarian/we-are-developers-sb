type Json =
    | null
    | string
    | number
    | boolean
    | Array<JSON>
    | {
        [prop: string]: Json
    }