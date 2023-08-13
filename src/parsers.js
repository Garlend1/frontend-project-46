import yaml from 'js-yaml';

const parsers = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error('Incorrect format');
  }
};

export default parsers;
