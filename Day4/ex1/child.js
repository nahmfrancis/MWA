const fs = require('fs');
const path = require('path');
const readFile = (zfile) =>{
    var zcontent = fs.readFileSync(path.resolve(__dirname, zfile),'utf8');
    return zcontent;
}
process.on('message',(zfile) => {
    const zcontent = readFile(zfile);
    process.send(zcontent)
})
