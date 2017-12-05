import _ from 'lodash';
import './style.css'
function component() {
    let ele = document.createElement('div');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
    ele.classList.add('hello')
    return ele;
}
document.body.appendChild(component())