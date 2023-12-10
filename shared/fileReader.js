import fs from 'node:fs/promises'; 

const fileReader = async function (src) {
  try {
    return await fs.readFile(src, { encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
}

export {
  fileReader
}