// Here https://catchts.com/safer-types you can find more
type Animal = { tag: 'animal' } // convert to interface

type Dog = Animal & { bark: true }

declare let animalFn: (x: Animal) => void; // add generic
declare let dogFn: (x: Dog) => void;

// Function arguments are contravariant 
animalFn = dogFn; // ok without strictFunctionTypes and error with

/**
 * Second example
 */
declare let animal: Animal;

const handleRecord = (obj: Record<string, unknown>) => {
    obj['hello'] = 2 // unsafe code
}

handleRecord(animal) // error

export { }