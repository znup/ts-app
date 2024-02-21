const withoutEnd = () => {
  while (true) {
    console.log('lalala');
  }
};

const fail = (message: string) => {
  // throw new Error(message);
  return message;
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  }
  if (typeof input === 'number') {
    return 'es un numero';
  }
  if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('no es un string, un numero o un array');
};

console.log(example('hola'));
console.log(example([1, 2, 3, 4, 5, 6]));
console.log(example(1));
console.log(example(false)); // aqui se detiene
console.log(example('mensaje despues de fail'));
