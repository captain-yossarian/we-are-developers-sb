const PATHS = ['a', 'b'] as const

type Path = 'a' | 'b'

type PathMap = {
    a: 'a',
    b: 'b'
}

const result = PATHS
    .reduce((accumulator: PathMap, path: Path, index) => {

        if (index === 0) {
            const check = path
        }
        // TS tries to find most common type for both keys
        accumulator[path] = path // Error: Type 'string' is not assignable to type 'never'.

        return accumulator
    }, {} as PathMap)

type a = 'a'
type b = 'b'

type c = a & b // never



export { }