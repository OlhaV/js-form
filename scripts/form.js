function Validate(sForm, sName, sEmail, sPhone, sSelect, sCheckbox, showDiv) {
	var v = this;

	// form and form elements 
	v.form = $(sForm);
	v.name = v.form.find(sName);
	v.phone = v.form.find(sPhone);
	v.email = v.form.find(sEmail);
	v.select = v.form.find(sSelect);
	v.checkbox = v.form.find(sCheckbox);
	v.showDiv = $(showDiv);

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
			$(event.target).removeClass('error');
			$(event.target).addClass('correct');
		} else {
			$(event.target).removeClass('correct');
			$(event.target).addClass('error');
		}
	}
 
	// on input change check if the info is correct 
	v.name.blur(function(){
		v.test();
		v.changeColor();
		if (v.checked) {
			v.nameChecked = true;
		}
	});

	v.phone.blur(function(){
		v.test();
		v.changeColor();
		if (v.checked) {
			v.phoneChecked = true;
		}
	});

	v.email.blur(function(){
		v.test();
		v.changeColor();
		if (v.checked) {
			v.emailChecked = true;
		}
	});

	v.form.submit(function(e){
		e.preventDefault();
		if (v.nameChecked && v.phoneChecked && v.emailChecked && v.checkbox.prop('checked')) {
			v.showDiv.html('<p>' + v.name.val() + '</p>' + 
						   '<p>' + v.phone.val() + '</p>' + 
						   '<p>' + v.email.val() + '</p>' + 
						   '<p>Количество участников: ' + v.select.val() + '</p>');
			v.showDiv.css('display', 'block');
		// } else if (!v.checkbox.prop('checked')) {
			// alert("please make sure you've studied the rules");
		}
		else {
			alert('Please insert the correct info');
		}
	});
}