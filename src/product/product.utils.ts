export type ID = string | number;

export const delay = (ms: number) => new Promise<void>(res => setTimeout(res, ms));

export function getProp<T, K extends keyof T> (obj: T, key: K): T[K]{
    return obj[key];
} 

export class Base{
    Id : ID;
    Name: string;
    constructor(id: number, name: string){
        this.Id = id;
        this.Name = name;
    }
}

export interface IProduct {
    getInfo(): string;
}