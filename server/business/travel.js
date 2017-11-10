const fs = require('fs');
const path = require('path');

function travel(dir, callback) {
    callback = callback || new Function();
    fs.readdir(dir, function(err, data){
        data.forEach(file => {
            var pathname = path.join(dir, file);
            if(fs.statSync(pathname).isDirectory()){
                travel(pathname, callback)
            }else {
                callback(pathname)
            }
        })
    })
}

travel('../public', pathname => console.log(pathname))