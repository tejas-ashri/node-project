const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express();

app.use(express.json());

function listFiles(directoryPath, callback){
    fs.readdir(directoryPath, (err,files)=>{
        if(err)
            return callback(err,null);
        else 
            return callback(null,files);
    });
}

function readFile(fileName,){

}

app.get('/files', (req,res)=>{
    const directoryPath = path.join(__dirname,"dir");

    listFiles(directoryPath,(err,files)=>{
        if(err){
            res.status(500).json({
                error: "err"
            });
        }else{
            res.status(200).json({
                files
            });
        }
    });
})

// app.get("/files/:fileName", (req,res)=>{
//     const name = req.params.fileName;
//     const filePath = path.join(__dirname,"dir",name);
//     fs.readFile(filePath, "utf-8", (err,data)=>{
//         if(err){
//             res.status(500).json({
//                 error: "Can't read file"
//             });
//         }else{
//             res.status(200).json({
//                 data
//             });
//         }
//     })
// })

app.listen(3000);