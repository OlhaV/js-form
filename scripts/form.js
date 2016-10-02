function Validate(sForm, sName, sEmail, sPhone, sCheckbox) {
	var v = this;

	// form and form elements 
	v.form = $(sForm);
	v.name = v.form.find(sName);
	v.phone = v.form.find(sPhone);
	v.email = v.form.find(sEmail);
	v.checkbox = v.form.find(sCheckbox);

	// flags 
	v.checked = false;
	v.emailChecked = false;
	v.nameChecked = false;
	v.phoneChecked = false;

	// check if input value is in accordance with pattern 
	v.test = function() {
		var pattern = patterns.get(event.target.name);
		v.checked = pattern.test(event.target.value);
	}

	// change input color depending on the result of test 
	v.changeColor = function() {
		if (v.checked) {
			$(event.target).addClass('correct');
		} else {
			$(event.target).addClass('error');
		}
	}
 
	// on input change check if the info is correct 
	v.name.change(function(){
		v.test();
		v.changeColor();
		if (v.checked) {
			v.nameChecked = true;
		}
			console.log('v.nameChecked = ' + v.nameChecked);
	});

	v.phone.change(function(){
		v.test();
		v.changeColor();
		if (v.checked) {
			v.phoneChecked = true;
		}
			console.log('v.phoneChecked = ' + v.phoneChecked);
	});

	v.email.change(function(){
		v.test();
		v.changeColor();
		if (v.checked) {
			v.emailChecked = true;
		}
			console.log('v.emailChecked = ' + v.emailChecked);
	});



	// check if checkbox is checked 
	v.checkbox.change(function(){
		if (v.checkbox.prop('checked')) {
			console.log('checkbox is ' + v.checkbox.prop('checked'));
		} else {
			console.log('checkbox is ' + v.checkbox.prop('checked'));
		}
	});

	v.form.submit(function(e){
		e.preventDefault();
		if (v.emailChecked && v.nameChecked && v.phoneChecked && v.checkbox.prop('checked')) {
			console.log('ok!');
		} else if (!v.checkbox.prop('checked')) {
			console.log('checkbox not checked');
		}
		else {
			alert('please insert the correct info');
		}
	});
}