import _ from 'lodash';
import path from 'path';
import fsp from 'fs-promise';
import { srcRoot } from './constants';
import components from './public-components';
import { buildContent } from './buildBabel';

const templatePath = path.join(srcRoot, 'templates');
const factoryTemplatePath = path.join(templatePath, 'factory.js.template');
const indexTemplatePath = path.join(templatePath, 'factory.index.js.template');

export default function generateFactories(destination, babelOptions={}) {

  let generateCompiledFile = function (file, content) {
    let outpath = path.join(destination, `${file}.js`);
    buildContent(content, __dirname, outpath, babelOptions);
  };

  return Promise.all([
    fsp.readFile(factoryTemplatePath)
      .then(template => {
        Promise.all(components.map(name => {
          generateCompiledFile(name, _.template(template)({name}));
        }));
      }),
    fsp.readFile(indexTemplatePath)
      .then(template => _.template(template)({components}))
      .then(content => generateCompiledFile('index', content))
  ]);

}
