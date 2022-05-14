
const list = ['a', 'b', 'c'] as const;

/**
 * 
 * People are facing this problem every day
 * I'm not going to dig into theory aspect of this problem
 * Just solution
 * 
 */
const check = (elem: string) => list.includes(elem) // expected error
