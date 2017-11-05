var devConfig = require("./webpack.config.js");
 
var prodConfig = devConfig;
 
prodConfig.output = {
    path: __dirname + "/dist/",
    filename: "bundle.js"
};
 
module.exports = prodConfig;