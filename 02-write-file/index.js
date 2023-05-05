const fs = require('fs');
const path = require('path');
const readline = require('readline');
const {
  stdin: input,
  stdout: output,
} = require('process');

const enterFile = path.join(__dirname, 'text.txt');

const writeStream = fs.createWriteStream(enterFile);

const rl = readline.createInterface({ input, output });

rl.write('Please, enter text!' + "\n");

rl.on('line', (text) => {
  if (text === 'exit') {
    console.log('Goodbye!')
    rl.close()
    writeStream.close()
  } else {
    writeStream.write(text + "\n")
  }
});

rl.on('SIGINT', (text) => {
    console.log('Goodbye!')
    rl.close()
    writeStream.close()
});

