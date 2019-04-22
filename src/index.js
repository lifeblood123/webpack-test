import _ from 'lodash';
import './style.css';
import yun from './image/yun.jpg';
import printMe from './print.js';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'], '');
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  // 将图像添加到我们现有的 div。
  //  var myIcon = new Image();
  //  myIcon.src = yun;
  //  element.appendChild(myIcon);
  console.log("hello1");
  return element;
}
document.body.appendChild(component());