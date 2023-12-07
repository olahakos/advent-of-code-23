const fs = require('node:fs/promises');

async function fileReader() {
  try {
    return await fs.readFile('input.txt', { encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
}
const numberString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const isNumber = (char) => {
    if (char >= '1' && char <= '9') return true;
    return false;
}

/*
* nineightvekqrceightwo3 => 
0: {9, 'nine'},
3: {8, 'eight'},
14: {8, 'eight'},
18: {2, 'two'},
*/

const convertNumbersFront = (line) => {
  let buffer = '';
  line
    .split('')
    .forEach(char => {
      buffer = `${buffer}${char}`;
      buffer = replaceStrings(buffer);
  });
  return buffer;
}

const convertNumbersBack = (line) => {
  let buffer = '';
  line
    .split('')
    .reverse()
    .forEach(char => {
      buffer = `${char}${buffer}`;
      buffer = replaceStrings(buffer);
  });
  return buffer;
}

const replaceStrings = (str) => {
  let newStr = str;
  numberString.forEach((numbName, ind) => {
    newStr = newStr.replaceAll(numbName, ind+1);
  });
  return newStr
}

const getNumbersOut = (data) => {
  let total = 0;
  const dataArr = data.split('\n');
  dataArr.forEach(line => {
      var numbArrFront = [];
      var numbArrBack = [];
      const replacedLineFront = convertNumbersFront(line);
      const replacedLineBack = convertNumbersBack(line);

      replacedLineFront
        .split('')
        .forEach(char => {
          if (isNumber(char)) numbArrFront.push(char)
      })
      replacedLineBack
        .split('')
        .forEach(char => {
          if (isNumber(char)) numbArrBack.push(char)
      })
      if (numbArrFront[0]) total += parseInt(numbArrFront[0])*10;
      if (numbArrBack[numbArrBack.length - 1]) total += parseInt(numbArrBack[numbArrBack.length - 1]);
  });
  return total;
}

const main = async () => {
  const data = await fileReader()
  const total = getNumbersOut(data);
  console.log(total);
}

if (process.env.NODE_ENV!=='test') main();

module.exports = {
  isNumber,
  getNumbersOut,
  replaceStrings,
  convertNumbersFront,
  convertNumbersBack,
  numberString,
}