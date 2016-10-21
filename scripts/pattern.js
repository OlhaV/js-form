var patterns = {
	'name' : /^[a-zA-Z-а-яА-ЯёЁ'(\s)?]+$/,
	'phone' : /^\+[3][8]\([0][1-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
	'email' : /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
}

patterns.get = function(sPatternsName) {
	return patterns[sPatternsName];
} 