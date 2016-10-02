var patterns = {
	'name' : /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/,
	'phone' : /[\+380][\(1-9\)][0-9]{3}-[0-9]{2}-[0-9]{2}/,
	'email' : /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
}

patterns.get = function(sPatternsName) {
	return patterns[sPatternsName];
} 