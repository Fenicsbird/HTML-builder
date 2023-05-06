const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const folderPath = '03-files-in-folder/secret-folder';

fsPromises.readdir(folderPath, {
  withFileTypes: true
}).then(files => {
  files.forEach(file => {
    if(!file.isDirectory()) {
      const filePath = path.join(folderPath, file.name);
      const fileBaseName = path.basename(filePath);
      const extName = path.extname(filePath);
        fsPromises.stat(filePath).then(result => {
          console.log(`${fileBaseName.replace(extName, '')} - ${extName.replace('.', '')} - ${Number(result.size / 1024).toFixed(3)}KB`);
          });
        }
      });
    });



