import fs from 'fs';
import path from 'path';
import process from 'process';
import makeTree from './buildTree.js';
import parsers from './parsers.js';
import makeStylish from './formaters/stylish.js';

const genDiff = (filepath1, filepath2) => {
  const getFormat1 = path.extname(filepath1);
  const getFormat2 = path.extname(filepath2);

  const getPath1 = path.resolve(process.cwd(), filepath1);
  const getPath2 = path.resolve(process.cwd(), filepath2);

  const readFile1 = fs.readFileSync(getPath1, 'utf-8');
  const readFile2 = fs.readFileSync(getPath2, 'utf-8');

  const object1 = parsers(readFile1, getFormat1);
  const object2 = parsers(readFile2, getFormat2);

  const tree = makeTree(object1, object2);
  const result = makeStylish(tree);
  return result;
};

export default genDiff;

// console.log(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json'));
