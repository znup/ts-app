const prices: (number | string)[] = [100, 200, 300, 300, 400, 'as'];

prices.push(500);
prices.push('500');

// el array solo tiene 2 elementos
// el primer elemento es string y el segundo es number,
// por lo que no se puede agregar mas
// de lo contrario se generaria un error
const user: [string, number] = ['znup', 20];

let users: [string, number, boolean];
// users = ['znup', 22];

// users = [];
// users = ['znup'];
// users = ['znup', 21];
users = ['znup', 23, true];

// desestructuración
const [username, age] = users;
console.log('\n');
console.log(username);
console.log(age);
// console.log('\n');
console.log(username, age);
