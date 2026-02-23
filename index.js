const { Command } = require.('commander');
const fs = require('fs');
const program = new Command();

program
    .name('File related CLI')
    .description('CLI for file related task')
    .version('0.1.0')

program.command('words')
    .description('Counts number of words in a text file')
    .argument('<file>', 'words to count in a text file')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
            } else {
                const words = data.split(" ").length;
                console.log(`There are ${words} words in ${file}.`);
            }
        });
    });

program.command('lines')
    .description('Counts number of lines in a text file')
    .argument('<file>', 'lines to count in a text file')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            const lines = data.split("\n").length;
            console.log(`There are ${lines} lines in ${file}.`)
        });
    });

program.parse();