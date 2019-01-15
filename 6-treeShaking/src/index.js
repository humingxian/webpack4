import _ from 'lodash'

import { cube } from './math'

function component() {
  var element = document.createElement('pre');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash 通过 import 导入到当前文件
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  return element;
}

document.body.appendChild(component());