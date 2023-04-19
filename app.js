const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');
const calc = require("./public/script")
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const { PythonShell } = require("python-shell");


//   function calcu() {
//     console.log("Hello Script.js");
  
//     let options = {
//       scriptPath: "C:/Users/hnand/OneDrive/Desktop/Python_Script/py_script-main",
//       args: [21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     };
//     PythonShell.run("app.py", options, (err, res) => {
//       if (err) console.log(err.message);
//       if (res) console.log(res);
//     });
//   }

//   calcu();



// const childPython = spawn("python", ["--version"]);
// // console.log(childPython);

// childPython.stdout.on("data", (data) => {
//   console.log(data);
// });

// childPython.stderr.on("data", (data) => {
//   console.error(data);
// });

// childPython.on("close", (code) => {
//   console.log(code);
// });



const { spawn } = require("child_process");
const getPythonScriptStdout = (arg) => {
    const python = spawn('python', ['app.py', 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    return new Promise((resolve, reject) => {
        let result = ""
        python.stdout.on('data', (data) => {
            result += data
        });
        python.on('close', () => {
            resolve(result)
        });
        python.on('error', (err) => {
            reject(err)
        });
    })
}

let charges = "" ;
getPythonScriptStdout('./python.py').then((output) => {
    charges += output;
})

function getCharges(c){
    console.log(c);
}
getCharges(charges);


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});