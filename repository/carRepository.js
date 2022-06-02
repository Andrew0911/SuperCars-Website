const fs = require("fs");

module.exports.readJSONFile = () => {
    return JSON.parse(fs.readFileSync("db.json"))["cars"];
  }
  
  module.exports.writeJSONFile = (content) => {
    fs.writeFileSync(
      "db.json",
      JSON.stringify({ cars: content }, null, 4),
      "utf8",
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
  