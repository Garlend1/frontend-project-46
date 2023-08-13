import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const expectedStylish = fs.readFileSync(getFixturePath('expectedStylish.txt'), 'utf8');
const expectedPlain = fs.readFileSync(getFixturePath('expectedPlain.txt'), 'utf8');
const expectedJSON = fs.readFileSync(getFixturePath('expectedJSON.txt'), 'utf8');
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

test('gendiff plain', () => {
  expect(genDiff(filePathYaml1, filePathJson2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filePathJson1, filePathYaml2, 'plain')).toEqual(expectedPlain);
});

test('gendiff JSON', () => {
  expect(genDiff(filePathJson1, filePathYaml2, 'json')).toEqual(expectedJSON);
  expect(genDiff(filePathYaml1, filePathJson2, 'json')).toEqual(expectedJSON);
});
