import _ from 'lodash';

const getIndent = (depth, spaceCount = 4) => {
  const replacer = '';
  return replacer.repeat(depth * spaceCount - 2);
};
const stringify = (data, depth) => {
  if (!_.isObject(data)) return `${data}`;

  const lines = Object.entries(data).map(
    ([key, value]) => `${getIndent(depth)} ${key}: ${stringify(value, depth + 1)}`,
  );
  return `{\n${lines.join('\n')}\n${getIndent(depth - 1)}  }`;
};

const makeStylish = (tree) => {
  const iter = (obj, depth = 1) => obj.map((node) => {
    const
      {
        key, value, newValue, oldValue, children, type,
      } = node;
    switch (type) {
      case 'added':
        return `${getIndent(depth)}+ ${key}: ${stringify(value, depth + 1)}`;
      case 'removed':
        return `${getIndent(depth)}- ${key}: ${stringify(value, depth + 1)}`;
      case 'changed': {
        const str1 = `${getIndent(depth)}- ${key}: ${stringify(oldValue, depth + 1)}`;
        const str2 = `${getIndent(depth)}+ ${key}: ${stringify(newValue, depth + 1)}`;
        return `${str1}\n${str2}`;
      }
      case 'unchanged':
        return `${getIndent(depth)} ${key}: ${stringify(value, depth + 1)}`;
      case 'nested':
        return `${getIndent(depth)} ${key}: {\n${iter(children, depth + 1)}}\n${getIndent(depth)}  }`;
      default:
        throw new Error(`Incorrect ${type}`);
    }
  }).join('\n');

  return `{\n${iter(tree)}\n}`;
};

export default makeStylish;
