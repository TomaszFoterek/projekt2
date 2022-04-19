const {mkdir} = require('fs').promises;

(async ()=>{

    await mkdir('./data/file.txt');

})()
