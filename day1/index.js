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

const replacestring = (str) => {
  let newStr = str;
  numberString.forEach((numbName, ind) => {
    newStr = newStr.replaceAll(numbName, ind+1);
    // console.log(newStr);
  });
  return newStr
}

const getNumbersOut = (data) => {
  let total = 0;
  const dataArr = data.split('\n');
  dataArr.forEach(line => {
      var numbArr = [];
      var newLine = '';
      newLine = replacestring(line);
      const lineArr = newLine.split('');
      lineArr.forEach(char => {
          if (isNumber(char)) numbArr.push(char)
      })
      console.log(line, numbArr.join());
      if (numbArr[0]) total += parseInt(numbArr[0])*10;
      if (numbArr[numbArr.length - 1]) total += parseInt(numbArr[numbArr.length - 1]);
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
  replacestring,
}