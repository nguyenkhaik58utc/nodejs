export type ID = number | string;              // union
export type Point = [number, number];          // tuple
export type Greet = (s: string) => string;     // function type

export interface IUser {
  id: ID;
  name: string;
  age: number;
  role?: "student" | "employee" | "admin";    // union literal
}