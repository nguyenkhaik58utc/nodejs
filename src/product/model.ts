import { LogClass } from "../decorators";
import { DelayGetInfo, MyParamDecorator, PositiveNumber } from "./product.decorator";
import { Base, ID, IProduct } from "./product.utils";

@LogClass
export class Product extends Base implements IProduct {
    @PositiveNumber
    public quanlity: number = 0;
    private price1: number;
    #price2 :number;
    constructor(id: number, name: string, price1: number, price2: number){
        super(id, name)
        this.price1 = price1;
        this.#price2 = price2;
    }
    @DelayGetInfo(100)
    getInfo(): string {
        return `${this.Name}, ${this.quanlity}`;
    }

    get price1Value(): number {
        return this.price1;
    }
    set price1Value(@MyParamDecorator value: number) {
        this.price1 = value;
    }

    get price2Value(): number {
        return this.#price2;
    }
    set price2Value(@MyParamDecorator value: number) {
        this.#price2 = value;
    }
}