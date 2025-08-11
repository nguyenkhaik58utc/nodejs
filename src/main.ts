// main.ts
import { UserService } from "./services";
import { IUser } from "./types";
import { Box, getProp, MyPartial } from "./utils";

async function main() {
  // init with two users
  const svc = new UserService([
    { id: 1, name: "Thủy", age: 20, role: "student" },
    { id: 2, name: "Hà",   age: 30, role: "employee" },
  ]);

  console.log("VERSION (static readonly):", UserService.VERSION);

  // show prototype sharing: method references are equal
  const a = svc.list;
  const b = svc.list;
  console.log("list === list ?", a === b); // true => method on prototype (shared)

  // `this` in arrow vs normal:
  svc.logNames();           // arrow method - still has correct `this`
  const detached = svc.logNames;
  detached();               // still works because arrow kept lexical this

  // async / promise: create user
  const newUser: IUser = { id: 3, name: "Bình", age: 35, role: "admin" };
  await svc.createUser(newUser);
  console.log("After create, total age:", svc.totalAge());

  // map/filter/reduce chain: sum of doubled ages of adults
  const sumDoubledAdultAges = svc
    .getAdultUsers()
    .map(u => u.age * 2)
    .reduce((acc, v) => acc + v, 0);
  console.log("sumDoubledAdultAges:", sumDoubledAdultAges);

  // generic helper getProp + keyof
  const u1 = svc.findById(1)!;
  const name = getProp(u1, "name"); // keyof ensures type-safety
  console.log("getProp name:", name);

  // Generic class Box default type
  const box = new Box("Test"); // default T = string
  console.log("box default:", box.value);

  // Partial (mapped/utility type) usage
  const patch: MyPartial<IUser> = { name: "Thủy Updated" };
  // pretend update: apply patch
  const userToUpdate = svc.findById(1);
  if (userToUpdate) Object.assign(userToUpdate, patch);
  console.log("patched:", svc.findById(1));
  
  // access checks:
  console.log("secret via method:", svc.getSecret());
  // console.log(svc.#secret); // SyntaxError if uncommented — #private cannot be accessed outside
}

main().catch(console.error);
