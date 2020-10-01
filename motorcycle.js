/* Send Values to Firebase DB */

//Liability Policy

//motorcycle_upto75
$('#motorcycle_liability_upto75_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_liability_upto75');
	rootRef.set({		
		motorcycle_liability_upto75_act:$('#motorcycle_liability_upto75_act').val(),
		motorcycle_liability_upto75_tax:$('#motorcycle_liability_upto75_tax').val(),
		motorcycle_liability_upto75_paod:$('#motorcycle_liability_upto75_paod').val()
	});
	toastr.success('Values saved!', 'Motorcycle - Upto 75cc (Liability)')
})

//motorcycle_upto150
$('#motorcycle_liability_upto150_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_liability_upto150');
	rootRef.set({		
		motorcycle_liability_upto150_act:$('#motorcycle_liability_upto150_act').val(),
		motorcycle_liability_upto150_tax:$('#motorcycle_liability_upto150_tax').val(),
		motorcycle_liability_upto150_paod:$('#motorcycle_liability_upto150_paod').val()
	});
	toastr.success('Values saved!', 'Motorcycle - Upto 150cc (Liability)')
})

//motorcycle_upto350
$('#motorcycle_liability_upto350_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_liability_upto350');
	rootRef.set({		
		motorcycle_liability_upto350_act:$('#motorcycle_liability_upto350_act').val(),
		motorcycle_liability_upto350_tax:$('#motorcycle_liability_upto350_tax').val(),
		motorcycle_liability_upto350_paod:$('#motorcycle_liability_upto350_paod').val()
	});
	toastr.success('Values saved!', 'Motorcycle - Upto 350cc (Liability)')
})

//motorcycle_above350
$('#motorcycle_liability_above350_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_liability_above350');
	rootRef.set({		
		motorcycle_liability_above350_act:$('#motorcycle_liability_above350_act').val(),
		motorcycle_liability_above350_tax:$('#motorcycle_liability_above350_tax').val(),
		motorcycle_liability_above350_paod:$('#motorcycle_liability_above350_paod').val()
	});
	toastr.success('Values saved!', 'Motorcycle - Above 350cc (Liability)')
})


//Package Policy

//motorcycle_upto75
$('#motorcycle_package_upto75_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_package_upto75');
	rootRef.set({		
		motorcycle_package_upto75_dop_year1:$('#motorcycle_package_upto75_dop_year1').val(),
		motorcycle_package_upto75_dop_year2:$('#motorcycle_package_upto75_dop_year2').val(),
		motorcycle_package_upto75_dop_year3:$('#motorcycle_package_upto75_dop_year3').val(),
		motorcycle_package_upto75_ndp:$('#motorcycle_package_upto75_ndp').val(),
		motorcycle_package_upto75_paod:$('#motorcycle_package_upto75_paod').val()
	});
	toastr.success('Values saved!', 'Motorcycle - Upto 75cc (Package)')
})

//motorcycle_upto150
$('#motorcycle_package_upto150_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_package_upto150');
	rootRef.set({		
		motorcycle_package_upto150_dop_year1:$('#motorcycle_package_upto150_dop_year1').val(),
		motorcycle_package_upto150_dop_year2:$('#motorcycle_package_upto150_dop_year2').val(),
		motorcycle_package_upto150_dop_year3:$('#motorcycle_package_upto150_dop_year3').val(),
		motorcycle_package_upto150_ndp:$('#motorcycle_package_upto150_ndp').val(),
		motorcycle_package_upto150_paod:$('#motorcycle_package_upto150_paod').val()
	});
	toastr.success('Values saved!', 'Motorcycle - Upto 150cc (Package)')
})

//motorcycle_upto150
$('#motorcycle_package_upto350_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_package_upto350');
	rootRef.set({		
		motorcycle_package_upto350_dop_year1:$('#motorcycle_package_upto350_dop_year1').val(),
		motorcycle_package_upto350_dop_year2:$('#motorcycle_package_upto350_dop_year2').val(),
		motorcycle_package_upto350_dop_year3:$('#motorcycle_package_upto350_dop_year3').val(),
		motorcycle_package_upto350_ndp:$('#motorcycle_package_upto350_ndp').val(),
		motorcycle_package_upto350_paod:$('#motorcycle_package_upto350_paod').val()
	});
	toastr.success('Values saved!', 'Motorcycle - Upto 350cc (Package)')
})

//motorcycle_upto150
$('#motorcycle_package_above350_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_package_above350');
	rootRef.set({		
		motorcycle_package_above350_dop_year1:$('#motorcycle_package_above350_dop_year1').val(),
		motorcycle_package_above350_dop_year2:$('#motorcycle_package_above350_dop_year2').val(),
		motorcycle_package_above350_dop_year3:$('#motorcycle_package_above350_dop_year3').val(),
		motorcycle_package_above350_ndp:$('#motorcycle_package_above350_ndp').val(),
		motorcycle_package_above350_paod:$('#motorcycle_package_above350_paod').val()
	});
	toastr.success('Values saved!', 'Motorcycle - Above 350cc (Package)')
})


/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//motorcycle_upto75
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_liability_upto75');
	rootRef.on('value', function(snapshot){
			$('#motorcycle_liability_upto75_act').val(snapshot.child('motorcycle_liability_upto75_act').val());
			$('#motorcycle_liability_upto75_tax').val(snapshot.child('motorcycle_liability_upto75_tax').val());
			$('#motorcycle_liability_upto75_paod').val(snapshot.child('motorcycle_liability_upto75_paod').val());

			$("label[for='motorcycle_liability_upto75_act']").addClass('active');
			$("label[for='motorcycle_liability_upto75_tax']").addClass('active');
			$("label[for='motorcycle_liability_upto75_paod']").addClass('active');
		})
});

//motorcycle_upto150
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_liability_upto150');
	rootRef.on('value', function(snapshot){
			$('#motorcycle_liability_upto150_act').val(snapshot.child('motorcycle_liability_upto150_act').val());
			$('#motorcycle_liability_upto150_tax').val(snapshot.child('motorcycle_liability_upto150_tax').val());
			$('#motorcycle_liability_upto150_paod').val(snapshot.child('motorcycle_liability_upto150_paod').val());

			$("label[for='motorcycle_liability_upto150_act']").addClass('active');
			$("label[for='motorcycle_liability_upto150_tax']").addClass('active');
			$("label[for='motorcycle_liability_upto150_paod']").addClass('active');
		})
});

//motorcycle_upto350
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_liability_upto350');
	rootRef.on('value', function(snapshot){
			$('#motorcycle_liability_upto350_act').val(snapshot.child('motorcycle_liability_upto350_act').val());
			$('#motorcycle_liability_upto350_tax').val(snapshot.child('motorcycle_liability_upto350_tax').val());
			$('#motorcycle_liability_upto350_paod').val(snapshot.child('motorcycle_liability_upto350_paod').val());

			$("label[for='motorcycle_liability_upto350_act']").addClass('active');
			$("label[for='motorcycle_liability_upto350_tax']").addClass('active');
			$("label[for='motorcycle_liability_upto350_paod']").addClass('active');
		})
});

//motorcycle_above350
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_liability_above350');
	rootRef.on('value', function(snapshot){
			$('#motorcycle_liability_above350_act').val(snapshot.child('motorcycle_liability_above350_act').val());
			$('#motorcycle_liability_above350_tax').val(snapshot.child('motorcycle_liability_above350_tax').val());
			$('#motorcycle_liability_above350_paod').val(snapshot.child('motorcycle_liability_above350_paod').val());

			$("label[for='motorcycle_liability_above350_act']").addClass('active');
			$("label[for='motorcycle_liability_above350_tax']").addClass('active');
			$("label[for='motorcycle_liability_above350_paod']").addClass('active');
		})
});

//Package Policy

//motorcycle_upto75
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_package_upto75');
	rootRef.on('value', function(snapshot){
			$('#motorcycle_package_upto75_dop_year1').val(snapshot.child('motorcycle_package_upto75_dop_year1').val());
			$('#motorcycle_package_upto75_dop_year2').val(snapshot.child('motorcycle_package_upto75_dop_year2').val());
			$('#motorcycle_package_upto75_dop_year3').val(snapshot.child('motorcycle_package_upto75_dop_year3').val());
			$('#motorcycle_package_upto75_ndp').val(snapshot.child('motorcycle_package_upto75_ndp').val());
			$('#motorcycle_package_upto75_paod').val(snapshot.child('motorcycle_package_upto75_paod').val());

			$("label[for='motorcycle_package_upto75_dop_year1']").addClass('active');
			$("label[for='motorcycle_package_upto75_dop_year2']").addClass('active');
			$("label[for='motorcycle_package_upto75_dop_year3']").addClass('active');
			$("label[for='motorcycle_package_upto75_ndp']").addClass('active');
			$("label[for='motorcycle_package_upto75_paod']").addClass('active');
		})
});

//motorcycle_upto150
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_package_upto150');
	rootRef.on('value', function(snapshot){
			$('#motorcycle_package_upto150_dop_year1').val(snapshot.child('motorcycle_package_upto150_dop_year1').val());
			$('#motorcycle_package_upto150_dop_year2').val(snapshot.child('motorcycle_package_upto150_dop_year2').val());
			$('#motorcycle_package_upto150_dop_year3').val(snapshot.child('motorcycle_package_upto150_dop_year3').val());
			$('#motorcycle_package_upto150_ndp').val(snapshot.child('motorcycle_package_upto150_ndp').val());
			$('#motorcycle_package_upto150_paod').val(snapshot.child('motorcycle_package_upto150_paod').val());

			$("label[for='motorcycle_package_upto150_dop_year1']").addClass('active');
			$("label[for='motorcycle_package_upto150_dop_year2']").addClass('active');
			$("label[for='motorcycle_package_upto150_dop_year3']").addClass('active');
			$("label[for='motorcycle_package_upto150_ndp']").addClass('active');
			$("label[for='motorcycle_package_upto150_paod']").addClass('active');
		})
});

//motorcycle_upto350
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_package_upto350');
	rootRef.on('value', function(snapshot){
			$('#motorcycle_package_upto350_dop_year1').val(snapshot.child('motorcycle_package_upto350_dop_year1').val());
			$('#motorcycle_package_upto350_dop_year2').val(snapshot.child('motorcycle_package_upto350_dop_year2').val());
			$('#motorcycle_package_upto350_dop_year3').val(snapshot.child('motorcycle_package_upto350_dop_year3').val());
			$('#motorcycle_package_upto350_ndp').val(snapshot.child('motorcycle_package_upto350_ndp').val());
			$('#motorcycle_package_upto350_paod').val(snapshot.child('motorcycle_package_upto350_paod').val());

			$("label[for='motorcycle_package_upto350_dop_year1']").addClass('active');
			$("label[for='motorcycle_package_upto350_dop_year2']").addClass('active');
			$("label[for='motorcycle_package_upto350_dop_year3']").addClass('active');
			$("label[for='motorcycle_package_upto350_ndp']").addClass('active');
			$("label[for='motorcycle_package_upto350_paod']").addClass('active');
		})
});

//motorcycle_above350
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_package_above350');
	rootRef.on('value', function(snapshot){
			$('#motorcycle_package_above350_dop_year1').val(snapshot.child('motorcycle_package_above350_dop_year1').val());
			$('#motorcycle_package_above350_dop_year2').val(snapshot.child('motorcycle_package_above350_dop_year2').val());
			$('#motorcycle_package_above350_dop_year3').val(snapshot.child('motorcycle_package_above350_dop_year3').val());
			$('#motorcycle_package_above350_ndp').val(snapshot.child('motorcycle_package_above350_ndp').val());
			$('#motorcycle_package_above350_paod').val(snapshot.child('motorcycle_package_above350_paod').val());

			$("label[for='motorcycle_package_above350_dop_year1']").addClass('active');
			$("label[for='motorcycle_package_above350_dop_year2']").addClass('active');
			$("label[for='motorcycle_package_above350_dop_year3']").addClass('active');
			$("label[for='motorcycle_package_above350_ndp']").addClass('active');
			$("label[for='motorcycle_package_above350_paod']").addClass('active');
		})
});