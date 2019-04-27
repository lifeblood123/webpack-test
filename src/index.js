// import _ from 'lodash';
import './style.css';
import './a.css';
import yun from './image/yun.jpg';
import { printMe } from './print.js';
// import {printMe1} from './print.js';
function getComponent() {
  // var element = document.createElement('div');
  // var btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  // element.innerHTML = _.join(['hello', 'webpack'], '');
  // element.classList.add('hello');
  // btn.innerHTML = 'Click me and check the console  aa!';
  // btn.onclick = printMe;
  // element.appendChild(btn);
  // 将图像添加到我们现有的 div。
  //  var myIcon = new Image();
  //  myIcon.src = yun;
  //  element.appendChild(myIcon);
  // console.log("hello1");
  // return element;
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');
    console.log("动态引用成功");
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(error => 'An error occurred while loading the component');
}
getComponent().then(component => {
  document.body.appendChild(component);
})
// document.body.appendChild(component());
if (process.env.NODE_ENV !== 'production') {
  console.log('开发环境!');
} else {
  console.log("生产环境");

}