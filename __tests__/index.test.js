import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const expectedStylish = fs.readFileSync(getFixturePath('expectedStylish.txt'), 'utf8');
const filePathJson1 = getFixturePath('file1.json');
const filePathJson2 = getFixturePath('file2.json');
const filePathYaml1 = getFixturePath('file1.yaml');
const filePathYaml2 = getFixturePath('file2.yaml');

test('gendiff', () => {
  expect(genDiff(filePathJson1, filePathJson2)).toEqual(expectedStylish);
});
test('gendiff YAML', () => {
  expect(genDiff(filePathYaml1, filePathYaml2)).toEqual(expectedStylish);
});
