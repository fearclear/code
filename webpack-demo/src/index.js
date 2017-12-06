import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from "./data.xml";
function component() {
    let ele = document.createElement('div');
    let ele2 = document.createElement('div');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    ele2.innerHTML = _.join(['Hello', 'webpack'], ' ');
    ele2.classList.add('hello');
    ele.appendChild(ele2);

    const myIcon = new Image();
    myIcon.src = Icon;
    ele.appendChild(myIcon);

    console.log(Data)
    return ele;
}
document.body.appendChild(component())