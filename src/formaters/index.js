import makeStylish from './stylish.js';
import makePlain from './plain.js';

const chooseFormat = (tree, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    default:
      throw new Error('Incorrect format');
  }
};

export default chooseFormat;
