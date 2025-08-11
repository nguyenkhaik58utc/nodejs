// decorators.ts
export function LogClass(constructor: Function) {
  console.log(`[ClassDecorator] ${constructor.name} loaded`);
}

export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`[MethodDecorator] ${propertyKey} called with`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

export function LogProp(target: any, propertyKey: string) {
  // chỉ để minh hoạ: lưu metadata hoặc log khi class được đánh dấu
  console.log(`[PropertyDecorator] property "${propertyKey}" declared on`, target.constructor?.name || target);
}
