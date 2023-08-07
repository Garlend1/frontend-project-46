import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const expected = fs.readFileSync(getFixturePath('expected_file_stylish.txt'), 'utf8');

test('gendiff', () => {
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(expected);
});
