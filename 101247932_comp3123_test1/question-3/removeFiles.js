const fs = require('fs');
const path = require('path')
if(fs.existsSync("Logs")){
    fs.readdir("Logs",(err, files)=>{
        if(err){
            return console.log("Unable to read the directory!!" + err);
        }
        files.forEach(function(file){
            const filepath = path.join("Logs",file);
            fs.unlink(filepath,err => {
                if(err){
                    return console.log("problem occured",err)
                }
            })
            console.log(`delete file...${file}`) 
        })
        fs.rmdirSync("Logs");
        console.log("directory successfully removed")
        

    })
}