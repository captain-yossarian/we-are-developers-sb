/**
 * 
 * This technique is very simple yet very powerful
 * Example is very trivial
 * See this article https://catchts.com/type-negation for more explanation
 */

// type NotAnArray<T> = T extends any[] ? never : T

const expectNotArray = <T,>(arg: T extends any[] ? never : T) => arg

expectNotArray(10) // ok
expectNotArray('hello') // ok
expectNotArray([]) // expected error

