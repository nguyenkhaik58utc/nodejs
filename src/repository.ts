// repository.ts
import { ID } from "./types";

export class Repository<T extends { id: ID }> {
  protected items: T[] = [];

  static totalCreated = 0; // static member (thuộc class)

  constructor(initial: T[] = []) {
    this.items = initial;
  }

  add(item: T) {
    this.items.push(item);
    Repository.totalCreated++;
  }

  findById(id: ID): T | undefined {
    return this.items.find(x => x.id === id);
  }

  // example of prototype sharing: methods defined on prototype (class methods)
  list(): T[] {
    return this.items;
  }
}
