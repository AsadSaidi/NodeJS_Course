const {readFileSync, writeFileSync, readFile} = require('fs');

readFile('./content/first.txt', (err, result)=> {
    if(err){
        console.log(err)
        return null
    }else{
        console.log(result)
    }
})