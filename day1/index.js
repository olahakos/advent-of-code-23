const fs = require('node:fs/promises');
async function numberCollecter() {
  try {
    return await fs.readFile('input.txt', { encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
}

const isNumber = (char) => {
    if (char >= '0' && char <= '9') return true;
    return false;
}
let total = 0
numberCollecter()
    .then(data => {
        const dataArr = data.split('\n');
        dataArr.forEach(line => {
            var numbArr = [];
            const lineArr = line.split('');
            lineArr.forEach(char => {
                if (isNumber(char)) numbArr.push(char)
            })
            if (numbArr[0]) total += parseInt(numbArr[0])*10;
            if (numbArr[numbArr.length - 1]) total += parseInt(numbArr[numbArr.length - 1]);
        });
        console.log(total);
    })
