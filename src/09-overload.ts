// un string debe retornar como un array de string
// si recibe un array debe retornar un string

// la sobrecarga de funciones
// solo se puede hacer con funciones
// del tipo function
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // retornamos un string
  } else {
    return input.split(''); // retornamos un string[]
  }
}

const rtaArray = parseStr('hello');
// const rtaArray = parseStr(['h', 'o', 'l', 'a']);
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray: ', 'hello =>', rtaArray);

const rtaString = parseStr(['H', 'o', 'l', 'a']);
// const rtaString = parseStr('hello');
// rtaString.toLowerCase();
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}
console.log('rtaString: ', "['H', 'o', 'l', 'a'] =>", rtaString);
