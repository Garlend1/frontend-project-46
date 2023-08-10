import _ from 'lodash';

const makeTree = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const tree = keys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, children: makeTree(data1[key], data1[key]), type: 'nested'};
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, value: data2[key], type: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value: data1[key], type: 'removed' };
    }
    return { key, value: data1[key], type: 'unchanged' };
  });
  return tree;
};

export default makeTree;
