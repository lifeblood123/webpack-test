import _ from 'lodash';
import './style.css';
import './a.css';
import yun from './image/yun.jpg';
import * as webpackNumbers from 'yunlibiary';
import * as bnumber from './b';
// import { printMe } from './print.js';
// import {printMe1} from './print.js';
function component() {
  console.log(webpackNumbers);
  console.log(bnumber);
  var a =  webpackNumbers.wordToNum('Five');
      console.log(a);


  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');
  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  });

  return element;

}
document.body.appendChild(component());
// document.body.appendChild(component());
if (process.env.NODE_ENV !== 'production') {
  console.log('开发环境!');
} else {
  console.log("生产环境");
}