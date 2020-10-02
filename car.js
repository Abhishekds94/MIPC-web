/* Send Values to Firebase DB */

//Liability Policy

//car_upto1000
$('#car_liability_upto1000_btn').click(function(){
var rootRef = firebase.database().ref().child('car_liability_upto1000');
	rootRef.set({		
		car_liability_upto1000_act:$('#car_liability_upto1000_act').val(),
		car_liability_upto1000_ll:$('#car_liability_upto1000_ll').val(),
		car_liability_upto1000_lpg:$('#car_liability_upto1000_lpg').val(),
		car_liability_upto1000_tax:$('#car_liability_upto1000_tax').val(),
		car_liability_upto1000_paod:$('#car_liability_upto1000_paod').val()
	});
	toastr.success('Values saved!', 'Car - Upto 1000cc (Liability)')
})

//car_upto1500
$('#car_liability_upto1500_btn').click(function(){
var rootRef = firebase.database().ref().child('car_liability_upto1500');
	rootRef.set({		
		car_liability_upto1500_act:$('#car_liability_upto1500_act').val(),
		car_liability_upto1500_ll:$('#car_liability_upto1500_ll').val(),
		car_liability_upto1500_lpg:$('#car_liability_upto1500_lpg').val(),
		car_liability_upto1500_tax:$('#car_liability_upto1500_tax').val(),
		car_liability_upto1500_paod:$('#car_liability_upto1500_paod').val()
	});
	toastr.success('Values saved!', 'Car - Upto 1500cc (Liability)')
})

//car_above1500
$('#car_liability_above1500_btn').click(function(){
var rootRef = firebase.database().ref().child('car_liability_above1500');
	rootRef.set({		
		car_liability_above1500_act:$('#car_liability_above1500_act').val(),
		car_liability_above1500_ll:$('#car_liability_above1500_ll').val(),
		car_liability_above1500_lpg:$('#car_liability_above1500_lpg').val(),
		car_liability_above1500_tax:$('#car_liability_above1500_tax').val(),
		car_liability_above1500_paod:$('#car_liability_above1500_paod').val()
	});
	toastr.success('Values saved!', 'Car - Above 1500cc (Liability)')
})

//Package Policy

//car_upto1000
$('#car_package_upto1000_btn').click(function(){
var rootRef = firebase.database().ref().child('car_package_upto1000');
	rootRef.set({		
		car_package_upto1000_dop_year1:$('#car_package_upto1000_dop_year1').val(),
		car_package_upto1000_dop_year2:$('#car_package_upto1000_dop_year2').val(),
		car_package_upto1000_dop_year3:$('#car_package_upto1000_dop_year3').val(),
		car_package_upto1000_ndp:$('#car_package_upto1000_ndp').val(),
		car_package_upto1000_paod:$('#car_package_upto1000_paod').val()
	});
	toastr.success('Values saved!', 'Car - Upto 1000cc (Package)')
})

//car_upto1500
$('#car_package_upto1500_btn').click(function(){
var rootRef = firebase.database().ref().child('car_package_upto1500');
	rootRef.set({		
		car_package_upto1500_dop_year1:$('#car_package_upto1500_dop_year1').val(),
		car_package_upto1500_dop_year2:$('#car_package_upto1500_dop_year2').val(),
		car_package_upto1500_dop_year3:$('#car_package_upto1500_dop_year3').val(),
		car_package_upto1500_ndp:$('#car_package_upto1500_ndp').val(),
		car_package_upto1500_paod:$('#car_package_upto1500_paod').val()
	});
	toastr.success('Values saved!', 'Car - Upto 1500cc (Package)')
})

//car_upto1500
$('#car_package_above1500_btn').click(function(){
var rootRef = firebase.database().ref().child('car_package_above1500');
	rootRef.set({		
		car_package_above1500_dop_year1:$('#car_package_above1500_dop_year1').val(),
		car_package_above1500_dop_year2:$('#car_package_above1500_dop_year2').val(),
		car_package_above1500_dop_year3:$('#car_package_above1500_dop_year3').val(),
		car_package_above1500_ndp:$('#car_package_above1500_ndp').val(),
		car_package_above1500_paod:$('#car_package_above1500_paod').val()
	});
	toastr.success('Values saved!', 'Car - Above 1500cc (Package)')
})


/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//car_upto1000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('car_liability_upto1000');
	rootRef.on('value', function(snapshot){
			$('#car_liability_upto1000_act').val(snapshot.child('car_liability_upto1000_act').val());
			$('#car_liability_upto1000_ll').val(snapshot.child('car_liability_upto1000_ll').val());
			$('#car_liability_upto1000_lpg').val(snapshot.child('car_liability_upto1000_lpg').val());
			$('#car_liability_upto1000_tax').val(snapshot.child('car_liability_upto1000_tax').val());
			$('#car_liability_upto1000_paod').val(snapshot.child('car_liability_upto1000_paod').val());

			$("label[for='car_liability_upto1000_act']").addClass('active');
			$("label[for='car_liability_upto1000_ll']").addClass('active');
			$("label[for='car_liability_upto1000_lpg']").addClass('active');
			$("label[for='car_liability_upto1000_tax']").addClass('active');
			$("label[for='car_liability_upto1000_paod']").addClass('active');
		})
});

//car_upto1500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('car_liability_upto1500');
	rootRef.on('value', function(snapshot){
			$('#car_liability_upto1500_act').val(snapshot.child('car_liability_upto1500_act').val());
			$('#car_liability_upto1500_ll').val(snapshot.child('car_liability_upto1500_ll').val());
			$('#car_liability_upto1500_lpg').val(snapshot.child('car_liability_upto1500_lpg').val());			
			$('#car_liability_upto1500_tax').val(snapshot.child('car_liability_upto1500_tax').val());
			$('#car_liability_upto1500_paod').val(snapshot.child('car_liability_upto1500_paod').val());

			$("label[for='car_liability_upto1500_act']").addClass('active');
			$("label[for='car_liability_upto1500_ll']").addClass('active');
			$("label[for='car_liability_upto1500_lpg']").addClass('active');
			$("label[for='car_liability_upto1500_tax']").addClass('active');
			$("label[for='car_liability_upto1500_paod']").addClass('active');
		})
});

//car_above1500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('car_liability_above1500');
	rootRef.on('value', function(snapshot){
			$('#car_liability_above1500_act').val(snapshot.child('car_liability_above1500_act').val());
			$('#car_liability_above1500_ll').val(snapshot.child('car_liability_above1500_ll').val());
			$('#car_liability_above1500_lpg').val(snapshot.child('car_liability_above1500_lpg').val());
			$('#car_liability_above1500_tax').val(snapshot.child('car_liability_above1500_tax').val());
			$('#car_liability_above1500_paod').val(snapshot.child('car_liability_above1500_paod').val());

			$("label[for='car_liability_above1500_act']").addClass('active');
			$("label[for='car_liability_above1500_ll']").addClass('active');
			$("label[for='car_liability_above1500_lpg']").addClass('active');
			$("label[for='car_liability_above1500_tax']").addClass('active');
			$("label[for='car_liability_above1500_paod']").addClass('active');
		})
});


//Package Policy

//car_upto1000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('car_package_upto1000');
	rootRef.on('value', function(snapshot){
			$('#car_package_upto1000_dop_year1').val(snapshot.child('car_package_upto1000_dop_year1').val());
			$('#car_package_upto1000_dop_year2').val(snapshot.child('car_package_upto1000_dop_year2').val());
			$('#car_package_upto1000_dop_year3').val(snapshot.child('car_package_upto1000_dop_year3').val());
			$('#car_package_upto1000_ndp').val(snapshot.child('car_package_upto1000_ndp').val());
			$('#car_package_upto1000_paod').val(snapshot.child('car_package_upto1000_paod').val());

			$("label[for='car_package_upto1000_dop_year1']").addClass('active');
			$("label[for='car_package_upto1000_dop_year2']").addClass('active');
			$("label[for='car_package_upto1000_dop_year3']").addClass('active');
			$("label[for='car_package_upto1000_ndp']").addClass('active');
			$("label[for='car_package_upto1000_paod']").addClass('active');
		})
});

//car_upto1500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('car_package_upto1500');
	rootRef.on('value', function(snapshot){
			$('#car_package_upto1500_dop_year1').val(snapshot.child('car_package_upto1500_dop_year1').val());
			$('#car_package_upto1500_dop_year2').val(snapshot.child('car_package_upto1500_dop_year2').val());
			$('#car_package_upto1500_dop_year3').val(snapshot.child('car_package_upto1500_dop_year3').val());
			$('#car_package_upto1500_ndp').val(snapshot.child('car_package_upto1500_ndp').val());
			$('#car_package_upto1500_paod').val(snapshot.child('car_package_upto1500_paod').val());

			$("label[for='car_package_upto1500_dop_year1']").addClass('active');
			$("label[for='car_package_upto1500_dop_year2']").addClass('active');
			$("label[for='car_package_upto1500_dop_year3']").addClass('active');
			$("label[for='car_package_upto1500_ndp']").addClass('active');
			$("label[for='car_package_upto1500_paod']").addClass('active');
		})
});

//car_above1500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('car_package_above1500');
	rootRef.on('value', function(snapshot){
			$('#car_package_above1500_dop_year1').val(snapshot.child('car_package_above1500_dop_year1').val());
			$('#car_package_above1500_dop_year2').val(snapshot.child('car_package_above1500_dop_year2').val());
			$('#car_package_above1500_dop_year3').val(snapshot.child('car_package_above1500_dop_year3').val());
			$('#car_package_above1500_ndp').val(snapshot.child('car_package_above1500_ndp').val());
			$('#car_package_above1500_paod').val(snapshot.child('car_package_above1500_paod').val());

			$("label[for='car_package_above1500_dop_year1']").addClass('active');
			$("label[for='car_package_above1500_dop_year2']").addClass('active');
			$("label[for='car_package_above1500_dop_year3']").addClass('active');
			$("label[for='car_package_above1500_ndp']").addClass('active');
			$("label[for='car_package_above1500_paod']").addClass('active');
		})
});