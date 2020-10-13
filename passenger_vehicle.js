/* Send Values to Firebase DB */

//Liability Policy

//bus_upto18
$('#bus_liability_upto18_btn').click(function(){
var rootRef = firebase.database().ref().child('bus_liability_upto18');
	rootRef.set({		
		bus_liability_upto18_act:$('#bus_liability_upto18_act').val(),
		bus_liability_upto18_ll:$('#bus_liability_upto18_ll').val(),
		bus_liability_upto18_lpg:$('#bus_liability_upto18_lpg').val(),
		bus_liability_upto18_tax:$('#bus_liability_upto18_tax').val(),
		bus_liability_upto18_paod:$('#bus_liability_upto18_paod').val()
	});
	toastr.success('Values saved!', 'Bus - Upto 18 Passengers (Liability)')
})

//bus_upto36
$('#bus_liability_upto36_btn').click(function(){
var rootRef = firebase.database().ref().child('bus_liability_upto36');
	rootRef.set({		
		bus_liability_upto36_act:$('#bus_liability_upto36_act').val(),
		bus_liability_upto36_ll:$('#bus_liability_upto36_ll').val(),
		bus_liability_upto36_lpg:$('#bus_liability_upto36_lpg').val(),
		bus_liability_upto36_tax:$('#bus_liability_upto36_tax').val(),
		bus_liability_upto36_paod:$('#bus_liability_upto36_paod').val()
	});
	toastr.success('Values saved!', 'Bus - Upto 36 Passengers (Liability)')
})

//bus_upto60
$('#bus_liability_upto60_btn').click(function(){
var rootRef = firebase.database().ref().child('bus_liability_upto60');
	rootRef.set({		
		bus_liability_upto60_act:$('#bus_liability_upto60_act').val(),
		bus_liability_upto60_ll:$('#bus_liability_upto60_ll').val(),
		bus_liability_upto60_lpg:$('#bus_liability_upto60_lpg').val(),
		bus_liability_upto60_tax:$('#bus_liability_upto60_tax').val(),
		bus_liability_upto60_paod:$('#bus_liability_upto60_paod').val()
	});
	toastr.success('Values saved!', 'Bus - Upto 60 Passengers (Liability)')
})

//bus_above60
$('#bus_liability_above60_btn').click(function(){
var rootRef = firebase.database().ref().child('bus_liability_above60');
	rootRef.set({		
		bus_liability_above60_act:$('#bus_liability_above60_act').val(),
		bus_liability_above60_ll:$('#bus_liability_above60_ll').val(),
		bus_liability_above60_lpg:$('#bus_liability_above60_lpg').val(),
		bus_liability_above60_tax:$('#bus_liability_above60_tax').val(),
		bus_liability_above60_paod:$('#bus_liability_above60_paod').val()
	});
	toastr.success('Values saved!', 'Bus - Above 60 Passengers (Liability)')
})

//Package Policy

//bus_upto18
$('#bus_package_upto18_btn').click(function(){
var rootRef = firebase.database().ref().child('bus_package_upto18');
	rootRef.set({		
		bus_package_upto18_dop_year1:$('#bus_package_upto18_dop_year1').val(),
		bus_package_upto18_dop_year2:$('#bus_package_upto18_dop_year2').val(),
		bus_package_upto18_dop_year3:$('#bus_package_upto18_dop_year3').val(),
		bus_package_upto18_ndp:$('#bus_package_upto18_ndp').val(),
		bus_package_upto18_paod:$('#bus_package_upto18_paod').val()
	});
	toastr.success('Values saved!', 'Bus - Upto 18 Passengers (Package)')
})

//bus_upto36
$('#bus_package_upto36_btn').click(function(){
var rootRef = firebase.database().ref().child('bus_package_upto36');
	rootRef.set({		
		bus_package_upto36_dop_year1:$('#bus_package_upto36_dop_year1').val(),
		bus_package_upto36_dop_year2:$('#bus_package_upto36_dop_year2').val(),
		bus_package_upto36_dop_year3:$('#bus_package_upto36_dop_year3').val(),
		bus_package_upto36_ndp:$('#bus_package_upto36_ndp').val(),
		bus_package_upto36_paod:$('#bus_package_upto36_paod').val()
	});
	toastr.success('Values saved!', 'Bus - Upto 36 Passengers (Package)')
})

//bus_upto60
$('#bus_package_upto60_btn').click(function(){
var rootRef = firebase.database().ref().child('bus_package_upto60');
	rootRef.set({		
		bus_package_upto60_dop_year1:$('#bus_package_upto60_dop_year1').val(),
		bus_package_upto60_dop_year2:$('#bus_package_upto60_dop_year2').val(),
		bus_package_upto60_dop_year3:$('#bus_package_upto60_dop_year3').val(),
		bus_package_upto60_ndp:$('#bus_package_upto60_ndp').val(),
		bus_package_upto60_paod:$('#bus_package_upto60_paod').val()
	});
	toastr.success('Values saved!', 'Bus - Upto 60 Passengers (Package)')
})

//bus_above60
$('#bus_package_above60_btn').click(function(){
var rootRef = firebase.database().ref().child('bus_package_above60');
	rootRef.set({		
		bus_package_above60_dop_year1:$('#bus_package_above60_dop_year1').val(),
		bus_package_above60_dop_year2:$('#bus_package_above60_dop_year2').val(),
		bus_package_above60_dop_year3:$('#bus_package_above60_dop_year3').val(),
		bus_package_above60_ndp:$('#bus_package_above60_ndp').val(),
		bus_package_above60_paod:$('#bus_package_above60_paod').val()
	});
	toastr.success('Values saved!', 'Bus - Above 60 Passengers (Package)')
})

/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//bus_upto18
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('bus_liability_upto18');
	rootRef.on('value', function(snapshot){
			$('#bus_liability_upto18_act').val(snapshot.child('bus_liability_upto18_act').val());
			$('#bus_liability_upto18_ll').val(snapshot.child('bus_liability_upto18_ll').val());
			$('#bus_liability_upto18_lpg').val(snapshot.child('bus_liability_upto18_lpg').val());
			$('#bus_liability_upto18_tax').val(snapshot.child('bus_liability_upto18_tax').val());
			$('#bus_liability_upto18_paod').val(snapshot.child('bus_liability_upto18_paod').val());

			$("label[for='bus_liability_upto18_act']").addClass('active');
			$("label[for='bus_liability_upto18_ll']").addClass('active');
			$("label[for='bus_liability_upto18_lpg']").addClass('active');
			$("label[for='bus_liability_upto18_tax']").addClass('active');
			$("label[for='bus_liability_upto18_paod']").addClass('active');
		})
});

//bus_upto36
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('bus_liability_upto36');
	rootRef.on('value', function(snapshot){
			$('#bus_liability_upto36_act').val(snapshot.child('bus_liability_upto36_act').val());
			$('#bus_liability_upto36_ll').val(snapshot.child('bus_liability_upto36_ll').val());
			$('#bus_liability_upto36_lpg').val(snapshot.child('bus_liability_upto36_lpg').val());			
			$('#bus_liability_upto36_tax').val(snapshot.child('bus_liability_upto36_tax').val());
			$('#bus_liability_upto36_paod').val(snapshot.child('bus_liability_upto36_paod').val());

			$("label[for='bus_liability_upto36_act']").addClass('active');
			$("label[for='bus_liability_upto36_ll']").addClass('active');
			$("label[for='bus_liability_upto36_lpg']").addClass('active');
			$("label[for='bus_liability_upto36_tax']").addClass('active');
			$("label[for='bus_liability_upto36_paod']").addClass('active');
		})
});

//bus_upto60
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('bus_liability_upto60');
	rootRef.on('value', function(snapshot){
			$('#bus_liability_upto60_act').val(snapshot.child('bus_liability_upto60_act').val());
			$('#bus_liability_upto60_ll').val(snapshot.child('bus_liability_upto60_ll').val());
			$('#bus_liability_upto60_lpg').val(snapshot.child('bus_liability_upto60_lpg').val());
			$('#bus_liability_upto60_tax').val(snapshot.child('bus_liability_upto60_tax').val());
			$('#bus_liability_upto60_paod').val(snapshot.child('bus_liability_upto60_paod').val());

			$("label[for='bus_liability_upto60_act']").addClass('active');
			$("label[for='bus_liability_upto60_ll']").addClass('active');
			$("label[for='bus_liability_upto60_lpg']").addClass('active');
			$("label[for='bus_liability_upto60_tax']").addClass('active');
			$("label[for='bus_liability_upto60_paod']").addClass('active');
		})
});

//bus_above60
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('bus_liability_above60');
	rootRef.on('value', function(snapshot){
			$('#bus_liability_above60_act').val(snapshot.child('bus_liability_above60_act').val());
			$('#bus_liability_above60_ll').val(snapshot.child('bus_liability_above60_ll').val());
			$('#bus_liability_above60_lpg').val(snapshot.child('bus_liability_above60_lpg').val());
			$('#bus_liability_above60_tax').val(snapshot.child('bus_liability_above60_tax').val());
			$('#bus_liability_above60_paod').val(snapshot.child('bus_liability_above60_paod').val());

			$("label[for='bus_liability_above60_act']").addClass('active');
			$("label[for='bus_liability_above60_ll']").addClass('active');
			$("label[for='bus_liability_above60_lpg']").addClass('active');
			$("label[for='bus_liability_above60_tax']").addClass('active');
			$("label[for='bus_liability_above60_paod']").addClass('active');
		})
});


//Package Policy

//bus_upto18
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('bus_package_upto18');
	rootRef.on('value', function(snapshot){
			$('#bus_package_upto18_dop_year1').val(snapshot.child('bus_package_upto18_dop_year1').val());
			$('#bus_package_upto18_dop_year2').val(snapshot.child('bus_package_upto18_dop_year2').val());
			$('#bus_package_upto18_dop_year3').val(snapshot.child('bus_package_upto18_dop_year3').val());
			$('#bus_package_upto18_ndp').val(snapshot.child('bus_package_upto18_ndp').val());
			$('#bus_package_upto18_paod').val(snapshot.child('bus_package_upto18_paod').val());

			$("label[for='bus_package_upto18_dop_year1']").addClass('active');
			$("label[for='bus_package_upto18_dop_year2']").addClass('active');
			$("label[for='bus_package_upto18_dop_year3']").addClass('active');
			$("label[for='bus_package_upto18_ndp']").addClass('active');
			$("label[for='bus_package_upto18_paod']").addClass('active');
		})
});

//bus_upto36
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('bus_package_upto36');
	rootRef.on('value', function(snapshot){
			$('#bus_package_upto36_dop_year1').val(snapshot.child('bus_package_upto36_dop_year1').val());
			$('#bus_package_upto36_dop_year2').val(snapshot.child('bus_package_upto36_dop_year2').val());
			$('#bus_package_upto36_dop_year3').val(snapshot.child('bus_package_upto36_dop_year3').val());
			$('#bus_package_upto36_ndp').val(snapshot.child('bus_package_upto36_ndp').val());
			$('#bus_package_upto36_paod').val(snapshot.child('bus_package_upto36_paod').val());

			$("label[for='bus_package_upto36_dop_year1']").addClass('active');
			$("label[for='bus_package_upto36_dop_year2']").addClass('active');
			$("label[for='bus_package_upto36_dop_year3']").addClass('active');
			$("label[for='bus_package_upto36_ndp']").addClass('active');
			$("label[for='bus_package_upto36_paod']").addClass('active');
		})
});

//bus_upto60
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('bus_package_upto60');
	rootRef.on('value', function(snapshot){
			$('#bus_package_upto60_dop_year1').val(snapshot.child('bus_package_upto60_dop_year1').val());
			$('#bus_package_upto60_dop_year2').val(snapshot.child('bus_package_upto60_dop_year2').val());
			$('#bus_package_upto60_dop_year3').val(snapshot.child('bus_package_upto60_dop_year3').val());
			$('#bus_package_upto60_ndp').val(snapshot.child('bus_package_upto60_ndp').val());
			$('#bus_package_upto60_paod').val(snapshot.child('bus_package_upto60_paod').val());

			$("label[for='bus_package_upto60_dop_year1']").addClass('active');
			$("label[for='bus_package_upto60_dop_year2']").addClass('active');
			$("label[for='bus_package_upto60_dop_year3']").addClass('active');
			$("label[for='bus_package_upto60_ndp']").addClass('active');
			$("label[for='bus_package_upto60_paod']").addClass('active');
		})
});

//bus_above60
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('bus_package_above60');
	rootRef.on('value', function(snapshot){
			$('#bus_package_above60_dop_year1').val(snapshot.child('bus_package_above60_dop_year1').val());
			$('#bus_package_above60_dop_year2').val(snapshot.child('bus_package_above60_dop_year2').val());
			$('#bus_package_above60_dop_year3').val(snapshot.child('bus_package_above60_dop_year3').val());
			$('#bus_package_above60_ndp').val(snapshot.child('bus_package_above60_ndp').val());
			$('#bus_package_above60_paod').val(snapshot.child('bus_package_above60_paod').val());

			$("label[for='bus_package_above60_dop_year1']").addClass('active');
			$("label[for='bus_package_above60_dop_year2']").addClass('active');
			$("label[for='bus_package_above60_dop_year3']").addClass('active');
			$("label[for='bus_package_above60_ndp']").addClass('active');
			$("label[for='bus_package_above60_paod']").addClass('active');
		})
});