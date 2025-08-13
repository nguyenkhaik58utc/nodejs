import { console } from "inspector";

export function LogClass(target: Function){
    console.log(`Class decorator: ${target.name} đã được tạo`);
}

export function Readonly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false
    });
}

export function LogAccess(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;
    descriptor.get = function() {
        console.log(`Truy cập vào getter: ${propertyKey}`);
        return originalGet?.apply(this);
    };
}

export function DelayGetInfo(ms: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            console.log(`Đợi ${ms}ms trước khi chạy ${propertyKey}`);
            await new Promise(res => setTimeout(res, ms));
            return originalMethod.apply(this, args);
        };
    };
}

export function MyParamDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log("Class:", target.constructor.name);
    console.log("Method:", String(propertyKey));
    console.log("Parameter index:", parameterIndex);
}

export function PositiveNumber(target: any, propertyKey: string) {
    let value: number;

    Object.defineProperty(target, propertyKey, {
        get() {
            return value;
        },
        set(newValue: number) {
            if (typeof newValue !== 'number' || newValue <= 0) {
                throw new Error(`${propertyKey} phải là số > 0`);
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true
    });
}