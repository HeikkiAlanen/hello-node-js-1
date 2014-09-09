var m = require('./last-mod');
var dateFormat = require('./node_modules/dateformat');

var filename = process.argv[2];

var timestamp = m(filename);
//tarkastetaan ettei palauts ollut false
if(timestamp !== false){
	var date = new Date(timestamp);
	
	dateFormat.masks.finTime = 'dd.mm.yyyy HH.MM';
    console.log(dateFormat(date, "finTime"));
	
	
	//var fin = date.getDate() + '.' +(date.getMonth()+1) + '.' +date.getFullYear() + '.';
	
	//fin += '   ' + date.getHours() +'.' +date.getMinutes();
	
	//console.log(fin);
}else{
	//jos ei saada kunnollista tiedostonimeä
	console.log('Error message');
}