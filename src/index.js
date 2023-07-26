import fs from 'fs';
import path from 'path';
import process from 'process';

const genDiff = (filepath1, filepath2) => {
  const makeObject1 = fs.readFileSync(path.resolve(process.cwd(), filepath1));
  const makeObject2 = fs.readFileSync(path.resolve(process.cwd(), filepath2));
  return makeObject1;
};
console.log(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json'));
export default genDiff;
