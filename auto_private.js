/* Send Values to Firebase DB */

//Liability Policy

//auto_private_upto6
$('#auto_private_liability_btn').click(function(){
var rootRef = firebase.database().ref().child('auto_private_liability');
	rootRef.set({		
		auto_private_liability_act:$('#auto_private_liability_act').val(),
		auto_private_liability_ll:$('#auto_private_liability_ll').val(),
		auto_private_liability_lpg:$('#auto_private_liability_lpg').val(),
		auto_private_liability_tax:$('#auto_private_liability_tax').val(),
		auto_private_liability_paod:$('#auto_private_liability_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods Auto (Liability)')
})

//auto_private_upto6
$('#auto_private_package_btn').click(function(){
var rootRef = firebase.database().ref().child('auto_private_package');
	rootRef.set({		
		auto_private_package_dop_year1:$('#auto_private_package_dop_year1').val(),
		auto_private_package_dop_year2:$('#auto_private_package_dop_year2').val(),
		auto_private_package_dop_year3:$('#auto_private_package_dop_year3').val(),
		auto_private_package_ndp:$('#auto_private_package_ndp').val(),
		auto_private_package_paod:$('#auto_private_package_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods Auto (Package)')
})

/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//auto_private_upto6
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('auto_private_liability');
	rootRef.on('value', function(snapshot){
			$('#auto_private_liability_act').val(snapshot.child('auto_private_liability_act').val());
			$('#auto_private_liability_ll').val(snapshot.child('auto_private_liability_ll').val());
			$('#auto_private_liability_lpg').val(snapshot.child('auto_private_liability_lpg').val());
			$('#auto_private_liability_tax').val(snapshot.child('auto_private_liability_tax').val());
			$('#auto_private_liability_paod').val(snapshot.child('auto_private_liability_paod').val());

			$("label[for='auto_private_liability_act']").addClass('active');
			$("label[for='auto_private_liability_ll']").addClass('active');
			$("label[for='auto_private_liability_lpg']").addClass('active');
			$("label[for='auto_private_liability_tax']").addClass('active');
			$("label[for='auto_private_liability_paod']").addClass('active');
		})
});

//Package Policy

//auto_private_upto6
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('auto_private_package');
	rootRef.on('value', function(snapshot){
			$('#auto_private_package_dop_year1').val(snapshot.child('auto_private_package_dop_year1').val());
			$('#auto_private_package_dop_year2').val(snapshot.child('auto_private_package_dop_year2').val());
			$('#auto_private_package_dop_year3').val(snapshot.child('auto_private_package_dop_year3').val());
			$('#auto_private_package_ndp').val(snapshot.child('auto_private_package_ndp').val());
			$('#auto_private_package_paod').val(snapshot.child('auto_private_package_paod').val());

			$("label[for='auto_private_package_dop_year1']").addClass('active');
			$("label[for='auto_private_package_dop_year2']").addClass('active');
			$("label[for='auto_private_package_dop_year3']").addClass('active');
			$("label[for='auto_private_package_ndp']").addClass('active');
			$("label[for='auto_private_package_paod']").addClass('active');
		})
});