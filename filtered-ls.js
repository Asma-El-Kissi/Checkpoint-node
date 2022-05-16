const fs = require('fs');

fs.readdir(process.argv[2],(err,files)=>{
if(err) return console.log(err);

files.forEach(function(file){
    
    let fileName = file.split(".");

    if( (fileName.length > 1) && (fileName[fileName.length-1] === process.argv[3]) )
    console.log(file);

    });

});

// const fs = require('fs')
// const path = require('path')
// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })