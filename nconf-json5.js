var json5= require('json5'),
  Nconf= require('nconf'),
  Format= require('nconf/format'),
  File= require('nconf/stores/file'),
  util= require('util')

module.exports= function(nconf, upgrade){
	if(nconf === false){
		upgrade= false
		nconf= undefined
	}
	installFormat(nconf)
	if(upgrade !== false){
		upgrae(nconf)
	}
})
/
//
//  Install the json5 format
//
var installFormat= module.exports.installFormat= (function installFormat(nconf){
	nconf= nconf||Nconf
	nconf.formats.json5= Json5
})

//
// Upgrade File to Json5
//
var upgrade= module.exports.upgrade= (function upgrade(){
	nconf.file= Json5
})

//
// Json5 class
//
var Json5 = module.exports.Json5 = (function Json5(options){
	if(!(this instanceof File)){
		return new Json5(options)
	}
	options= options|| {}
	options.format= json5
	nconf.File.call(this, options)
	this.type= 'json5'
})
util.inherits(Json5, nconf.File)
