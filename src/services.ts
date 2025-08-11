// services.ts
import { LogClass, LogMethod, LogProp } from "./decorators";
import { Repository } from "./repository";
import { IUser, ID } from "./types";

@LogClass
export class UserService extends Repository<IUser> {
  static readonly VERSION = "1.0.0";     // static + readonly
  #secret: string = "SOMERUNTIMESECRET"; // JS private field (runtime-safe)

  @LogProp
  company = "FPTShop";                   // property decorator (demo)

  private cache = new Map<ID, IUser>();  // TS private (compile-time)
  protected activeCount = 0;             // protected field

  constructor(initial: IUser[] = []) {
    super(initial);
    initial.forEach(u => this.cache.set(u.id, u));
    this.activeCount = this.items.length;
  }

  // arrow method — giữ `this` lexical (dùng khi truyền callback)
  logNames = () => {
    this.items.forEach(u => console.log("user:", u.name));
  }

  @LogMethod
  async createUser(user: IUser): Promise<IUser> {
    // Promise + async/await demo (simulate async save)
    await new Promise<void>(res => setTimeout(res, 100)); // wait 100ms
    this.add(user);
    this.cache.set(user.id, user);
    this.activeCount = this.items.length;
    return user;
  }

  getSecret(): string {
    // can access #private inside class, but outside cannot
    return this.#secret;
  }

  // array methods: filter/map/reduce examples
  getAdultUsers(): IUser[] {
    return this.items.filter(u => u.age >= 18);
  }

  getUpperNames(): string[] {
    return this.items.map(u => u.name.toUpperCase());
  }

  totalAge(): number {
    return this.items.reduce((acc, u) => acc + u.age, 0);
  }

  // use optional role param and union type
  findByRole(role?: IUser["role"]) {
    if (!role) return this.items;
    return this.items.filter(u => u.role === role);
  }
}
