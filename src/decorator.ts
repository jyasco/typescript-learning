function Logging(target: Function) {
  console.log('Logging...');
}

@Logging
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created!')
  }
}