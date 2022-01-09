const fs = require('fs');
let dirPath = process.argv[2];
 fs.watch(dirPath, {encoding : 'buffer'}, (eventType, fileName) => {
    console.log("Watching \"" + dirPath + "\"")
    if (eventType === "change") {
        let fullPathName = dirPath + "/" + fileName;
        fs.readFile(fullPathName, 'utf-8', function(err, data){
            if (err) {
                return console.log(err);
            }
            console.log("File \"" + fileName + "\" is being modified. \n It's contents ---> ")
            console.log("---");
            console.log(data);
            console.log("---");
        });
    }
});