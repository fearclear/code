function component() {
    let ele = document.createElement('div');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        let print = module.default;
        print();
    })
    ele.appendChild(btn);
    return ele;
}
let ele = component();
document.body.appendChild(ele);

if(module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(ele);
        ele = component();
        document.body.appendChild(ele);
    })
}