// utils.ts
export function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Generic Box with default type
export class Box<T = string> {
  constructor(public value: T) {}
}

// mapped type example: make all keys optional (equivalent Partial<T>)
export type MyPartial<T> = { [K in keyof T]?: T[K] };
