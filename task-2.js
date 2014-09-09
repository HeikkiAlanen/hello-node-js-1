var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Anna numero.", function(answer) {
  console.log(answer*2);
  rl.close();
});

//var arg = procesas.argv.slice(2);
//tai vastaavasti
//var arg = procesas.argv[2];
//console.log(arg*2);