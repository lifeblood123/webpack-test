import _ from 'lodash';
import './style.css';
import yun from './image/yun.jpg';
function component(){
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['hello','webpack'],'');
    element.classList.add('hello');
     // 将图像添加到我们现有的 div。
   var myIcon = new Image();
   myIcon.src = yun;
   element.appendChild(myIcon);
   return element;
}
document.body.appendChild(component());