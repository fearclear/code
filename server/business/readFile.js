const fs = require('fs');

try {
    console.log(__dirname, __filename);
    let data = fs.readFileSync('./test.json');
    console.log(data.toString());
} catch (error) {
    console.log(error);
}