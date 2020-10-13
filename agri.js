/* Send Values to Firebase DB */

//Liability Policy

//agri
$('#agri_liability_btn').click(function(){
var rootRef = firebase.database().ref().child('agri_liability');
	rootRef.set({		
		agri_liability_act:$('#agri_liability_act').val(),
		agri_liability_ll:$('#agri_liability_ll').val(),
		agri_liability_lpg:$('#agri_liability_lpg').val(),
		agri_liability_tax:$('#agri_liability_tax').val(),
		agri_liability_paod:$('#agri_liability_paod').val()
	});
	toastr.success('Values saved!', 'Tractor & Trailers (Liability)')
})

//agri
$('#agri_package_btn').click(function(){
var rootRef = firebase.database().ref().child('agri_package');
	rootRef.set({		
		agri_package_dop_year1:$('#agri_package_dop_year1').val(),
		agri_package_dop_year2:$('#agri_package_dop_year2').val(),
		agri_package_dop_year3:$('#agri_package_dop_year3').val(),
		agri_package_ndp:$('#agri_package_ndp').val(),
		agri_package_paod:$('#agri_package_paod').val()
	});
	toastr.success('Values saved!', 'Tractor & Trailers (Package)')
})

/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//agri
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('agri_liability');
	rootRef.on('value', function(snapshot){
			$('#agri_liability_act').val(snapshot.child('agri_liability_act').val());
			$('#agri_liability_ll').val(snapshot.child('agri_liability_ll').val());
			$('#agri_liability_lpg').val(snapshot.child('agri_liability_lpg').val());
			$('#agri_liability_tax').val(snapshot.child('agri_liability_tax').val());
			$('#agri_liability_paod').val(snapshot.child('agri_liability_paod').val());

			$("label[for='agri_liability_act']").addClass('active');
			$("label[for='agri_liability_ll']").addClass('active');
			$("label[for='agri_liability_lpg']").addClass('active');
			$("label[for='agri_liability_tax']").addClass('active');
			$("label[for='agri_liability_paod']").addClass('active');
		})
});

//Package Policy

//agri
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('agri_package');
	rootRef.on('value', function(snapshot){
			$('#agri_package_dop_year1').val(snapshot.child('agri_package_dop_year1').val());
			$('#agri_package_dop_year2').val(snapshot.child('agri_package_dop_year2').val());
			$('#agri_package_dop_year3').val(snapshot.child('agri_package_dop_year3').val());
			$('#agri_package_ndp').val(snapshot.child('agri_package_ndp').val());
			$('#agri_package_paod').val(snapshot.child('agri_package_paod').val());

			$("label[for='agri_package_dop_year1']").addClass('active');
			$("label[for='agri_package_dop_year2']").addClass('active');
			$("label[for='agri_package_dop_year3']").addClass('active');
			$("label[for='agri_package_ndp']").addClass('active');
			$("label[for='agri_package_paod']").addClass('active');
		})
});