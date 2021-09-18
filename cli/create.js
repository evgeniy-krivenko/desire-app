const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

const args = minimist(process.argv);
console.log(args);

// достаем путь до папки src текущего проекта
const srcPath = [__dirname, '..', 'src'];

// разбиваем путь из аргумента командной строки на массив
const arrPath = args.path.split('/');

// достаем последний элемент массива (название компонента)
const componentName = arrPath[arrPath.length - 1];

// создание директорий из аргумента (при необходимости)
const currentArray = [];
arrPath.forEach(element => {
  currentArray.push(element);
  const currentResolvePath = path.resolve(...srcPath, ...currentArray);
  if (!fs.existsSync(currentResolvePath)) { // проверка - существует такая директория или нет?
    fs.mkdirSync(currentResolvePath); // если нет, то создаем новую
  }
});

const componentPath = [...srcPath, ...arrPath];

const componentCode = `import React from 'react';
import './${componentName}.scss';

const ${componentName} = (props) => {
  return (
    <div className="">
    </div>
  );
};

export default ${componentName};`;
fs.writeFileSync(path.resolve(...componentPath, `${componentName}.jsx`), componentCode);

const indexCode = `export { default } from './${componentName}';`;
fs.writeFileSync(path.resolve(...componentPath, 'index.js'), indexCode);

const styleCode = '@import "src/styles/vars";\n\n';
fs.writeFileSync(path.resolve(...componentPath, `${componentName}.scss`), styleCode);