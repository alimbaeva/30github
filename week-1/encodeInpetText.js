function encodeInpetText() {
  const str = prompt('Enter text to encode: ');
  let coderWord = '';
  for (let i = 0; i < str.length; i += 1) {
    const charCode = str.charCodeAt(i);
    let code = charCode + 13;
    if (charCode >= 65 && charCode <= 90) {
      if (code > 90) {
          code = code - 90 + 64;
      }
      coderWord += String.fromCharCode(code);
    } else if (charCode >= 97 && charCode <= 122) {
      if (code > 122) {
          code = code - 122 + 96;
      } 
      coderWord += String.fromCharCode(code);
    } else {
      coderWord += str[i];
    }
  }
  return `Your encoded text: "${coderWord}"`;
}

console.log(encodeInpetText());