#!/usr/bin/env node
var fli = require('./index');

if(process.argv[2] == "-c"){
	console.log(fli.fLI(process.argv[3],"c"))
}else{
	console.log(fli.fLI(process.argv[3],"w"))
}

