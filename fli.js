#!/usr/bin/env node
var fli = require('./index');

/*if(process.argv[2] == "-c"){
	console.log(fli.fLI(process.argv[3],"c"))
}else{
	console.log(fli.fLI(process.argv[3],"w"))
}*/

var type="";
var len=0;
var toClipboard = false;
for(var i=2;i<process.argv.length-1;i++){
	if(process.argv[i] == "-c"){
		type="c";
		len = process.argv[++i];
	}else if(process.argv[i] == "-w"){
		type="w";
		len = process.argv[++i];
	}else if(process.argv[i] == "--copy"){
		toClipboard = true;
	}else{
		console.log("invalid arguments " + process.argv[i]);
		break;
	}
}

var clipboard = require("./clipboard");

if(type == "" || len==0){
	console.log("invalid arguments");
}else{
	if(toClipboard){
		clipboard.copy(fli.fLI(len,type),function(e){
			console.log("Failed to copy to the clipboard. " + e);
		});
		console.log("Copied to clipboard");
	}else{
		console.log(fli.fLI(len,type))
	}
}