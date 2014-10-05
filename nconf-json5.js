var json5= require('json5'),
  Nconf= require('nconf'),
  util= require('util')

var _wrapped

/// singleton nconf with json5 installed
module.exports= (function nconf(nconf){
	if(_wrapped && nconf){
		throw new Error('Already wrapped once')
	}
	if(_wrapped)
		return _wrapped

	_wrapped= nconf||Nconf
	installNconf(_wrapped)
})

/// install into nconf
var installNconf= module.exports.installNconf= (function(nconf, upgrade){
	if(nconf === false){
		upgrade= false
		nconf= undefined
	}
	installFormat(nconf)
	if(upgrade !== false){
		upgrae(nconf)
	}
	return nconf
})

/// install the json5 provider into nconf
var installProvider= module.exports.installProvider= (function installProvider(nconf){
	nconf= nconf||Nconf
	nconf.Provider.json5= Json5
})

///  install the json5 format into nconf
var installFormat= module.exports.installFormat= (function installFormat(nconf){
	nconf= nconf||Nconf
	nconf.formats.json5= json5
	return nconf
})

/// upgrade file store to json5
var upgrade= module.exports.upgrade= (function upgrade(nconf){
	nconf= nconf|| Nconf
	nconf.file= Json5
	nconf.Provider.file= Json5
	return nconf
})

/// Json5 class
var Json5 = module.exports.Json5 = (function Json5(options){
	if(!(this instanceof nconf.file)){
		return new Json5(options)
	}
	options= options|| {}
	options.format= json5
	nconf.File.call(this, options)
	this.type= 'json5'
	return this
})
util.inherits(Json5, Nconf.file)
