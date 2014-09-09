var m = require('./last-mod');
var dateFormat = require('./node_modules/dateformat');

var filename = process.argv[2];

var timestamp = m(filename);
//tarkastetaan ettei palauts ollut false
if(timestamp !== false){
	var date = new Date(timestamp);
	
	dateFormat.masks.finTime = 'dd.mm.yyyy HH.MM';
    console.log(dateFormat(date, "finTime"));
	
}else{
	//jos ei saada kunnollista tiedostonimeä
	console.log('Error message');
}