function Logging(message: string) {
  return function(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
  }
}

function Component(template: string, selector: string) {
  return function<T extends { new(...arg: any[]): {name: string} }>(constructor: T) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector('h1')!.textContent = instance.name;
    }
    return class extends constructor{
      constructor(...arg: any[]) {
        super(...arg);
      }
    }
  }
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('propertyLogging');
  console.log(target);
  console.log(propertyKey);
}

@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging User')
class User {
  @PropertyLogging
  name = 'Quill';
  constructor(public age: number) {
    console.log('User was created!')
  }
}