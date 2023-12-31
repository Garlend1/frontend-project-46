import _ from 'lodash';

const getValue = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return String(value);
};

const makePlain = (tree, path = '') => {
  const result = tree.flatMap((node) => {
    switch (node.type) {
      case 'added': {
        return `Property '${path}${node.key}' was added with value: ${getValue(node.value)}`;
      }
      case 'changed': {
        return `Property '${path}${node.key}' was updated. From ${getValue(node.oldValue)} to ${getValue(node.newValue)}`;
      }
      case 'removed': {
        return `Property '${path}${node.key}' was removed`;
      }
      case 'nested': {
        return makePlain(node.children, `${path}${node.key}.`);
      }
      default: {
        return [];
      }
    }
  });
  return result.join('\n');
};

export default makePlain;
