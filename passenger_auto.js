/* Send Values to Firebase DB */

//Liability Policy

//passAuto_upto6
$('#passauto_liability_upto6_btn').click(function(){
var rootRef = firebase.database().ref().child('passauto_liability_upto6');
	rootRef.set({		
		passauto_liability_upto6_act:$('#passauto_liability_upto6_act').val(),
		passauto_liability_upto6_ll:$('#passauto_liability_upto6_ll').val(),
		passauto_liability_upto6_lpg:$('#passauto_liability_upto6_lpg').val(),
		passauto_liability_upto6_tax:$('#passauto_liability_upto6_tax').val(),
		passauto_liability_upto6_paod:$('#passauto_liability_upto6_paod').val()
	});
	toastr.success('Values saved!', 'Passenger Auto - Upto 6 Passengers (Liability)')
})

//passAuto_upto6
$('#passauto_package_upto6_btn').click(function(){
var rootRef = firebase.database().ref().child('passauto_package_upto6');
	rootRef.set({		
		passauto_package_upto6_dop_year1:$('#passauto_package_upto6_dop_year1').val(),
		passauto_package_upto6_dop_year2:$('#passauto_package_upto6_dop_year2').val(),
		passauto_package_upto6_dop_year3:$('#passauto_package_upto6_dop_year3').val(),
		passauto_package_upto6_ndp:$('#passauto_package_upto6_ndp').val(),
		passauto_package_upto6_paod:$('#passauto_package_upto6_paod').val()
	});
	toastr.success('Values saved!', 'Passenger Auto - Upto 6 Passengers (Package)')
})

/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//passAuto_upto6
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('passauto_liability_upto6');
	rootRef.on('value', function(snapshot){
			$('#passauto_liability_upto6_act').val(snapshot.child('passauto_liability_upto6_act').val());
			$('#passauto_liability_upto6_ll').val(snapshot.child('passauto_liability_upto6_ll').val());
			$('#passauto_liability_upto6_lpg').val(snapshot.child('passauto_liability_upto6_lpg').val());
			$('#passauto_liability_upto6_tax').val(snapshot.child('passauto_liability_upto6_tax').val());
			$('#passauto_liability_upto6_paod').val(snapshot.child('passauto_liability_upto6_paod').val());

			$("label[for='passauto_liability_upto6_act']").addClass('active');
			$("label[for='passauto_liability_upto6_ll']").addClass('active');
			$("label[for='passauto_liability_upto6_lpg']").addClass('active');
			$("label[for='passauto_liability_upto6_tax']").addClass('active');
			$("label[for='passauto_liability_upto6_paod']").addClass('active');
		})
});

//Package Policy

//passAuto_upto6
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('passauto_package_upto6');
	rootRef.on('value', function(snapshot){
			$('#passauto_package_upto6_dop_year1').val(snapshot.child('passauto_package_upto6_dop_year1').val());
			$('#passauto_package_upto6_dop_year2').val(snapshot.child('passauto_package_upto6_dop_year2').val());
			$('#passauto_package_upto6_dop_year3').val(snapshot.child('passauto_package_upto6_dop_year3').val());
			$('#passauto_package_upto6_ndp').val(snapshot.child('passauto_package_upto6_ndp').val());
			$('#passauto_package_upto6_paod').val(snapshot.child('passauto_package_upto6_paod').val());

			$("label[for='passauto_package_upto6_dop_year1']").addClass('active');
			$("label[for='passauto_package_upto6_dop_year2']").addClass('active');
			$("label[for='passauto_package_upto6_dop_year3']").addClass('active');
			$("label[for='passauto_package_upto6_ndp']").addClass('active');
			$("label[for='passauto_package_upto6_paod']").addClass('active');
		})
});