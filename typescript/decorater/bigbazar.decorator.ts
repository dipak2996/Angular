export function decoratorWithoutParam(tar: Function) {
    console.log('decorator without param is invked')
}

export function decoratorWithParam(isclosed: boolean) {

    return function (target: Function) {
        console.log('decorator with param is invked')
        target.prototype.isclose = isclosed;
    }
}

export function decoratorForFuntion(isclosed: boolean) {

    return function (target: Function) {
        console.log('decorator with param is invked')
        target.prototype.isclose = isclosed;
    }

}


// Property Decorator
export function Emoji() {
    return function (target: Object, key: string | symbol) {

        let val = target[key];

        const getter = () => {
            return val;
        };
        const setter = (next) => {
            console.log('updating flavor...');
            val = `🍦 ${next} 🍦`;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });

    };

    // Method Decorator
     function Confirmable(message: string) {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
      const original = descriptor.value;
  
        descriptor.value = function( ... args: any[]) {
            const allow = confirm(message);
  
            if (allow) {
              const result = original.apply(this, args);
              return result;
            } else {
              return null;
            }
      };
  
      return descriptor;
    };
  }
  
}