import fs from 'fs';
import path from 'path';
import process from 'process';
import makeTree from './buildTree.js';

const genDiff = (filepath1, filepath2) => {
  const makeObject1 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8'));
  const makeObject2 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8'));
  const tree = makeTree(makeObject1, makeObject2);
  return tree;
};

export default genDiff;
// console.log(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json'));
