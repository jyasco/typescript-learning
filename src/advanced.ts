interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}
//type EnginnerBlogger = Engineer & Blogger;
interface EnginnerBlogger extends Engineer, Blogger { }

const quill: EnginnerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber

function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker){
  console.log(nomadWorker.name);
  if ('role' in nomadWorker){
    console.log(nomadWorker.role);
  }
  if ('followe' in nomadWorker) {
    console.log(nomadWorker.followe);
  }
}

class Dog {
  kind: 'dog' = 'dog'
  speak() {
    console.log('bow-wow');
  }
}

class Bird {
  kind: 'bird' = 'bird'
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet){
  pet.speak
  switch(pet.kind){
    case 'bird':
      pet.fly();
  }
  if (pet instanceof Bird){
    pet.fly();
  }
}

const input = document.getElementById('input')!;