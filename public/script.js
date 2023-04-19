const { PythonShell } = require("python-shell");

class C{
  static calcu() {
    console.log("Hello Script.js");
  
    let options = {
      scriptPath: "C:/Users/91931/OneDrive/Desktop/predictor",
      args: [21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    };
    PythonShell.run("app.py", options, (err, res) => {
      if (err) console.log(err.message);
      if (res) console.log(res);
    });
  }
}


// const { spawn } = require("child_process");
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

module.export = C;
