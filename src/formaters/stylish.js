import _ from 'lodash';

const doubleSpace = '  ';
const getIndent = (depth) => {
  const replacer = ' ';
  const spacesCount = 4;
  return replacer.repeat(depth * spacesCount).slice(0, -2);
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const keys = Object.entries(data);
  const result = keys.map(([key, value]) => `${getIndent(depth + 1)}${doubleSpace}${key}: ${stringify(value, depth + 1)}`);

  const format = `{\n${result.join('\n')}\n${getIndent(depth)}${doubleSpace}}`;
  return format;
};

export default stringify;
