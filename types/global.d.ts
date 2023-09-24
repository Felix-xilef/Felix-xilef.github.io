/**
 * Type representing one of the object properties types
 * 
 * - usage:
 * @example
 * let myVar: ValueOf<typeof myObject>;
 */
declare type ValueOf<T> = T[keyof T];
