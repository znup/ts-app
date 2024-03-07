export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // retornamos un string
//   } else {
//     return input.split(''); // retornamos un string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // retornamos un string
  }
  if (typeof input === 'string') {
    return input.split(''); // retornamos un string[]
  }
  if (typeof input === 'number') {
    return true;
  }
}

const rtaAr = parseStr('hello');
rtaAr.reverse();

console.log('rtaAr: ', 'hello =>', rtaAr);

const rtaStr = parseStr(['H', 'o', 'l', 'a']);
rtaStr.toLowerCase();
console.log('rtaString: ', "['H', 'o', 'l', 'a'] =>", rtaStr);

const rtaNum = parseStr(123);
console.log('rtaNum: ', '123 =>', rtaNum);
