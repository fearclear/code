const fs = require('fs');
fs.readFile(__dirname+'/users.js', function(err, data){
    console.log(__dirname);
    if(err){
        throw err
    }else if(data){
    
        console.log(data.toString());
    }
})