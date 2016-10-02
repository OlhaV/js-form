function Placeholder (sSelector) {
	var p = this;

	p.input = $(sSelector);
	
	$(function(){
		p.input.mask('+99(999)999-99-99');
	})

}
