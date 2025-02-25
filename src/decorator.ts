function Logging(message: string) {
  return function(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
  }
}

@Logging('Logging User')
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created!')
  }
}