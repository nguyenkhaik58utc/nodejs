interface userBase {
    getInfo() : string;
}

class User implements userBase {
    public name: string;
    protected age: number;
    private password: string;

    constructor (name: string, age: number, password: string){
        this.name = name;
        this.age = age;
        this.password = password;
    }

    public getInfo(): string {
        return `name: ${this.name}, age: ${this.age}`;
    } 
}

class student extends User {
    private school: string;

    constructor (name: string, age: number, password: string, school: string){
        super (name, age, password);
        this.school = school;
    }
    public getInfo(): string {
        return `${super.getInfo()}, school: ${this.school}`;
    }
}

const studentA = new student ("thuy", 25, "", "FPT");
console.log(studentA.getInfo());

const a = <T>(value : T) : T=> {
    return value;
}

function b<T>(value: T){
    return value;
}