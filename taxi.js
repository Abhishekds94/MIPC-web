/* Send Values to Firebase DB */

//Liability Policy

//taxi_upto1000
$('#taxi_liability_upto1000_btn').click(function(){
var rootRef = firebase.database().ref().child('taxi_liability_upto1000');
	rootRef.set({		
		taxi_liability_upto1000_act:$('#taxi_liability_upto1000_act').val(),
		taxi_liability_upto1000_ll:$('#taxi_liability_upto1000_ll').val(),
		taxi_liability_upto1000_lpg:$('#taxi_liability_upto1000_lpg').val(),
		taxi_liability_upto1000_tax:$('#taxi_liability_upto1000_tax').val(),
		taxi_liability_upto1000_paod:$('#taxi_liability_upto1000_paod').val()
	});
	toastr.success('Values saved!', 'Taxi - Upto 1000cc (Liability)')
})

//taxi_upto1500
$('#taxi_liability_upto1500_btn').click(function(){
var rootRef = firebase.database().ref().child('taxi_liability_upto1500');
	rootRef.set({		
		taxi_liability_upto1500_act:$('#taxi_liability_upto1500_act').val(),
		taxi_liability_upto1500_ll:$('#taxi_liability_upto1500_ll').val(),
		taxi_liability_upto1500_lpg:$('#taxi_liability_upto1500_lpg').val(),
		taxi_liability_upto1500_tax:$('#taxi_liability_upto1500_tax').val(),
		taxi_liability_upto1500_paod:$('#taxi_liability_upto1500_paod').val()
	});
	toastr.success('Values saved!', 'Taxi - Upto 1500cc (Liability)')
})

//taxi_above1500
$('#taxi_liability_above1500_btn').click(function(){
var rootRef = firebase.database().ref().child('taxi_liability_above1500');
	rootRef.set({		
		taxi_liability_above1500_act:$('#taxi_liability_above1500_act').val(),
		taxi_liability_above1500_ll:$('#taxi_liability_above1500_ll').val(),
		taxi_liability_above1500_lpg:$('#taxi_liability_above1500_lpg').val(),
		taxi_liability_above1500_tax:$('#taxi_liability_above1500_tax').val(),
		taxi_liability_above1500_paod:$('#taxi_liability_above1500_paod').val()
	});
	toastr.success('Values saved!', 'Taxi - Above 1500cc (Liability)')
})

//Package Policy

//taxi_upto1000
$('#taxi_package_upto1000_btn').click(function(){
var rootRef = firebase.database().ref().child('taxi_package_upto1000');
	rootRef.set({		
		taxi_package_upto1000_dop_year1:$('#taxi_package_upto1000_dop_year1').val(),
		taxi_package_upto1000_dop_year2:$('#taxi_package_upto1000_dop_year2').val(),
		taxi_package_upto1000_dop_year3:$('#taxi_package_upto1000_dop_year3').val(),
		taxi_package_upto1000_ndp:$('#taxi_package_upto1000_ndp').val(),
		taxi_package_upto1000_paod:$('#taxi_package_upto1000_paod').val()
	});
	toastr.success('Values saved!', 'Taxi - Upto 1000cc (Package)')
})

//taxi_upto1500
$('#taxi_package_upto1500_btn').click(function(){
var rootRef = firebase.database().ref().child('taxi_package_upto1500');
	rootRef.set({		
		taxi_package_upto1500_dop_year1:$('#taxi_package_upto1500_dop_year1').val(),
		taxi_package_upto1500_dop_year2:$('#taxi_package_upto1500_dop_year2').val(),
		taxi_package_upto1500_dop_year3:$('#taxi_package_upto1500_dop_year3').val(),
		taxi_package_upto1500_ndp:$('#taxi_package_upto1500_ndp').val(),
		taxi_package_upto1500_paod:$('#taxi_package_upto1500_paod').val()
	});
	toastr.success('Values saved!', 'Taxi - Upto 1500cc (Package)')
})

//taxi_upto1500
$('#taxi_package_above1500_btn').click(function(){
var rootRef = firebase.database().ref().child('taxi_package_above1500');
	rootRef.set({		
		taxi_package_above1500_dop_year1:$('#taxi_package_above1500_dop_year1').val(),
		taxi_package_above1500_dop_year2:$('#taxi_package_above1500_dop_year2').val(),
		taxi_package_above1500_dop_year3:$('#taxi_package_above1500_dop_year3').val(),
		taxi_package_above1500_ndp:$('#taxi_package_above1500_ndp').val(),
		taxi_package_above1500_paod:$('#taxi_package_above1500_paod').val()
	});
	toastr.success('Values saved!', 'Taxi - Above 1500cc (Package)')
})


/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//taxi_upto1000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('taxi_liability_upto1000');
	rootRef.on('value', function(snapshot){
			$('#taxi_liability_upto1000_act').val(snapshot.child('taxi_liability_upto1000_act').val());
			$('#taxi_liability_upto1000_ll').val(snapshot.child('taxi_liability_upto1000_ll').val());
			$('#taxi_liability_upto1000_lpg').val(snapshot.child('taxi_liability_upto1000_lpg').val());
			$('#taxi_liability_upto1000_tax').val(snapshot.child('taxi_liability_upto1000_tax').val());
			$('#taxi_liability_upto1000_paod').val(snapshot.child('taxi_liability_upto1000_paod').val());

			$("label[for='taxi_liability_upto1000_act']").addClass('active');
			$("label[for='taxi_liability_upto1000_ll']").addClass('active');
			$("label[for='taxi_liability_upto1000_lpg']").addClass('active');
			$("label[for='taxi_liability_upto1000_tax']").addClass('active');
			$("label[for='taxi_liability_upto1000_paod']").addClass('active');
		})
});

//taxi_upto1500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('taxi_liability_upto1500');
	rootRef.on('value', function(snapshot){
			$('#taxi_liability_upto1500_act').val(snapshot.child('taxi_liability_upto1500_act').val());
			$('#taxi_liability_upto1500_ll').val(snapshot.child('taxi_liability_upto1500_ll').val());
			$('#taxi_liability_upto1500_lpg').val(snapshot.child('taxi_liability_upto1500_lpg').val());			
			$('#taxi_liability_upto1500_tax').val(snapshot.child('taxi_liability_upto1500_tax').val());
			$('#taxi_liability_upto1500_paod').val(snapshot.child('taxi_liability_upto1500_paod').val());

			$("label[for='taxi_liability_upto1500_act']").addClass('active');
			$("label[for='taxi_liability_upto1500_ll']").addClass('active');
			$("label[for='taxi_liability_upto1500_lpg']").addClass('active');
			$("label[for='taxi_liability_upto1500_tax']").addClass('active');
			$("label[for='taxi_liability_upto1500_paod']").addClass('active');
		})
});

//taxi_above1500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('taxi_liability_above1500');
	rootRef.on('value', function(snapshot){
			$('#taxi_liability_above1500_act').val(snapshot.child('taxi_liability_above1500_act').val());
			$('#taxi_liability_above1500_ll').val(snapshot.child('taxi_liability_above1500_ll').val());
			$('#taxi_liability_above1500_lpg').val(snapshot.child('taxi_liability_above1500_lpg').val());
			$('#taxi_liability_above1500_tax').val(snapshot.child('taxi_liability_above1500_tax').val());
			$('#taxi_liability_above1500_paod').val(snapshot.child('taxi_liability_above1500_paod').val());

			$("label[for='taxi_liability_above1500_act']").addClass('active');
			$("label[for='taxi_liability_above1500_ll']").addClass('active');
			$("label[for='taxi_liability_above1500_lpg']").addClass('active');
			$("label[for='taxi_liability_above1500_tax']").addClass('active');
			$("label[for='taxi_liability_above1500_paod']").addClass('active');
		})
});


//Package Policy

//taxi_upto1000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('taxi_package_upto1000');
	rootRef.on('value', function(snapshot){
			$('#taxi_package_upto1000_dop_year1').val(snapshot.child('taxi_package_upto1000_dop_year1').val());
			$('#taxi_package_upto1000_dop_year2').val(snapshot.child('taxi_package_upto1000_dop_year2').val());
			$('#taxi_package_upto1000_dop_year3').val(snapshot.child('taxi_package_upto1000_dop_year3').val());
			$('#taxi_package_upto1000_ndp').val(snapshot.child('taxi_package_upto1000_ndp').val());
			$('#taxi_package_upto1000_paod').val(snapshot.child('taxi_package_upto1000_paod').val());

			$("label[for='taxi_package_upto1000_dop_year1']").addClass('active');
			$("label[for='taxi_package_upto1000_dop_year2']").addClass('active');
			$("label[for='taxi_package_upto1000_dop_year3']").addClass('active');
			$("label[for='taxi_package_upto1000_ndp']").addClass('active');
			$("label[for='taxi_package_upto1000_paod']").addClass('active');
		})
});

//taxi_upto1500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('taxi_package_upto1500');
	rootRef.on('value', function(snapshot){
			$('#taxi_package_upto1500_dop_year1').val(snapshot.child('taxi_package_upto1500_dop_year1').val());
			$('#taxi_package_upto1500_dop_year2').val(snapshot.child('taxi_package_upto1500_dop_year2').val());
			$('#taxi_package_upto1500_dop_year3').val(snapshot.child('taxi_package_upto1500_dop_year3').val());
			$('#taxi_package_upto1500_ndp').val(snapshot.child('taxi_package_upto1500_ndp').val());
			$('#taxi_package_upto1500_paod').val(snapshot.child('taxi_package_upto1500_paod').val());

			$("label[for='taxi_package_upto1500_dop_year1']").addClass('active');
			$("label[for='taxi_package_upto1500_dop_year2']").addClass('active');
			$("label[for='taxi_package_upto1500_dop_year3']").addClass('active');
			$("label[for='taxi_package_upto1500_ndp']").addClass('active');
			$("label[for='taxi_package_upto1500_paod']").addClass('active');
		})
});

//taxi_above1500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('taxi_package_above1500');
	rootRef.on('value', function(snapshot){
			$('#taxi_package_above1500_dop_year1').val(snapshot.child('taxi_package_above1500_dop_year1').val());
			$('#taxi_package_above1500_dop_year2').val(snapshot.child('taxi_package_above1500_dop_year2').val());
			$('#taxi_package_above1500_dop_year3').val(snapshot.child('taxi_package_above1500_dop_year3').val());
			$('#taxi_package_above1500_ndp').val(snapshot.child('taxi_package_above1500_ndp').val());
			$('#taxi_package_above1500_paod').val(snapshot.child('taxi_package_above1500_paod').val());

			$("label[for='taxi_package_above1500_dop_year1']").addClass('active');
			$("label[for='taxi_package_above1500_dop_year2']").addClass('active');
			$("label[for='taxi_package_above1500_dop_year3']").addClass('active');
			$("label[for='taxi_package_above1500_ndp']").addClass('active');
			$("label[for='taxi_package_above1500_paod']").addClass('active');
		})
});