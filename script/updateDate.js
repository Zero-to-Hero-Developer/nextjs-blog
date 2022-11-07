var fs = require("fs");

const path = `components/Layout.js`;

const readFile = fs.readFileSync(path, "utf-8");
let newFileContent = readFile.replace("#Tarih#", new Date().toString());
console.log(newFileContent);

fs.writeFile(path, newFileContent, function (err) {
  if (err) throw err;
  console.log("Saved!");
});
