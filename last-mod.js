//käytetty moduuli pitää sisällyttää 
var fs = require('fs');

module.exports = function(filename){
	//testi>> console.log('Hello');
	if(fs.existsSync(filename)){
		 //kerää tiedostostatiikkaa
		 var stat = fs.statSync(filename);
		 //mtime = palautuksen osa
		 return stat.mtime;
	}
	//ei tarvitse else haaraa >> mielummin ei ollenkaan.
	return false;
};