import _ from 'lodash';
function component() {
    let ele = document.createElement('div');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    ele.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return ele;
}
document.body.appendChild(component())