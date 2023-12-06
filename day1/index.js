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

const searchIndexer = (str, searchArr) => {
  numberString.forEach((numbText, numb) => {
    const firstIndex = str.indexOf(numbText);
    const lastIndex = str.lastIndexOf(numbText);
    if (firstIndex > -1) searchArr[firstIndex] = {numbText, 'numb': numb+1};
    if (lastIndex > -1) searchArr[lastIndex] = {numbText, 'numb': numb+1};
  });
  return searchArr;
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
      var numbArr = [];
      const replacedLine = replaceStrings(line);
      replacedLine
        .split('')
        .forEach(char => {
          if (isNumber(char)) numbArr.push(char)
      })
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
  replaceStrings,
  searchIndexer,
  numberString,
}