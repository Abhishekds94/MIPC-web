/* Send Values to Firebase DB */

//Liability Policy

//auto_passenger_upto6
$('#auto_passenger_liability_upto6_btn').click(function(){
var rootRef = firebase.database().ref().child('auto_passenger_liability_upto6');
	rootRef.set({		
		auto_passenger_liability_upto6_act:$('#auto_passenger_liability_upto6_act').val(),
		auto_passenger_liability_upto6_ll:$('#auto_passenger_liability_upto6_ll').val(),
		auto_passenger_liability_upto6_lpg:$('#auto_passenger_liability_upto6_lpg').val(),
		auto_passenger_liability_upto6_tax:$('#auto_passenger_liability_upto6_tax').val(),
		auto_passenger_liability_upto6_paod:$('#auto_passenger_liability_upto6_paod').val()
	});
	toastr.success('Values saved!', 'Passenger Auto - Upto 6 Passengers (Liability)')
})

//auto_passenger_upto6
$('#auto_passenger_package_upto6_btn').click(function(){
var rootRef = firebase.database().ref().child('auto_passenger_package_upto6');
	rootRef.set({		
		auto_passenger_package_upto6_dop_year1:$('#auto_passenger_package_upto6_dop_year1').val(),
		auto_passenger_package_upto6_dop_year2:$('#auto_passenger_package_upto6_dop_year2').val(),
		auto_passenger_package_upto6_dop_year3:$('#auto_passenger_package_upto6_dop_year3').val(),
		auto_passenger_package_upto6_ndp:$('#auto_passenger_package_upto6_ndp').val(),
		auto_passenger_package_upto6_paod:$('#auto_passenger_package_upto6_paod').val()
	});
	toastr.success('Values saved!', 'Passenger Auto - Upto 6 Passengers (Package)')
})

/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//auto_passenger_upto6
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('auto_passenger_liability_upto6');
	rootRef.on('value', function(snapshot){
			$('#auto_passenger_liability_upto6_act').val(snapshot.child('auto_passenger_liability_upto6_act').val());
			$('#auto_passenger_liability_upto6_ll').val(snapshot.child('auto_passenger_liability_upto6_ll').val());
			$('#auto_passenger_liability_upto6_lpg').val(snapshot.child('auto_passenger_liability_upto6_lpg').val());
			$('#auto_passenger_liability_upto6_tax').val(snapshot.child('auto_passenger_liability_upto6_tax').val());
			$('#auto_passenger_liability_upto6_paod').val(snapshot.child('auto_passenger_liability_upto6_paod').val());

			$("label[for='auto_passenger_liability_upto6_act']").addClass('active');
			$("label[for='auto_passenger_liability_upto6_ll']").addClass('active');
			$("label[for='auto_passenger_liability_upto6_lpg']").addClass('active');
			$("label[for='auto_passenger_liability_upto6_tax']").addClass('active');
			$("label[for='auto_passenger_liability_upto6_paod']").addClass('active');
		})
});

//Package Policy

//auto_passenger_upto6
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('auto_passenger_package_upto6');
	rootRef.on('value', function(snapshot){
			$('#auto_passenger_package_upto6_dop_year1').val(snapshot.child('auto_passenger_package_upto6_dop_year1').val());
			$('#auto_passenger_package_upto6_dop_year2').val(snapshot.child('auto_passenger_package_upto6_dop_year2').val());
			$('#auto_passenger_package_upto6_dop_year3').val(snapshot.child('auto_passenger_package_upto6_dop_year3').val());
			$('#auto_passenger_package_upto6_ndp').val(snapshot.child('auto_passenger_package_upto6_ndp').val());
			$('#auto_passenger_package_upto6_paod').val(snapshot.child('auto_passenger_package_upto6_paod').val());

			$("label[for='auto_passenger_package_upto6_dop_year1']").addClass('active');
			$("label[for='auto_passenger_package_upto6_dop_year2']").addClass('active');
			$("label[for='auto_passenger_package_upto6_dop_year3']").addClass('active');
			$("label[for='auto_passenger_package_upto6_ndp']").addClass('active');
			$("label[for='auto_passenger_package_upto6_paod']").addClass('active');
		})
});