/* Send Values to Firebase DB */

//Liability Policy

//private_goods_upto7500
$('#private_goods_liability_upto7500_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_liability_upto7500');
	rootRef.set({		
		private_goods_liability_upto7500_act:$('#private_goods_liability_upto7500_act').val(),
		private_goods_liability_upto7500_ll:$('#private_goods_liability_upto7500_ll').val(),
		private_goods_liability_upto7500_lpg:$('#private_goods_liability_upto7500_lpg').val(),
		private_goods_liability_upto7500_tax:$('#private_goods_liability_upto7500_tax').val(),
		private_goods_liability_upto7500_paod:$('#private_goods_liability_upto7500_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Upto 7500 KGs (Liability)')
})

//private_goods_upto12000
$('#private_goods_liability_upto12000_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_liability_upto12000');
	rootRef.set({		
		private_goods_liability_upto12000_act:$('#private_goods_liability_upto12000_act').val(),
		private_goods_liability_upto12000_ll:$('#private_goods_liability_upto12000_ll').val(),
		private_goods_liability_upto12000_lpg:$('#private_goods_liability_upto12000_lpg').val(),
		private_goods_liability_upto12000_tax:$('#private_goods_liability_upto12000_tax').val(),
		private_goods_liability_upto12000_paod:$('#private_goods_liability_upto12000_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Upto 12000 KGs (Liability)')
})

//private_goods_upto20000
$('#private_goods_liability_upto20000_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_liability_upto20000');
	rootRef.set({		
		private_goods_liability_upto20000_act:$('#private_goods_liability_upto20000_act').val(),
		private_goods_liability_upto20000_ll:$('#private_goods_liability_upto20000_ll').val(),
		private_goods_liability_upto20000_lpg:$('#private_goods_liability_upto20000_lpg').val(),
		private_goods_liability_upto20000_tax:$('#private_goods_liability_upto20000_tax').val(),
		private_goods_liability_upto20000_paod:$('#private_goods_liability_upto20000_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Upto 20000 KGs (Liability)')
})

//private_goods_upto40000
$('#private_goods_liability_upto40000_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_liability_upto40000');
	rootRef.set({		
		private_goods_liability_upto40000_act:$('#private_goods_liability_upto40000_act').val(),
		private_goods_liability_upto40000_ll:$('#private_goods_liability_upto40000_ll').val(),
		private_goods_liability_upto40000_lpg:$('#private_goods_liability_upto40000_lpg').val(),
		private_goods_liability_upto40000_tax:$('#private_goods_liability_upto40000_tax').val(),
		private_goods_liability_upto40000_paod:$('#private_goods_liability_upto40000_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Upto 40000 KGs (Liability)')
})

//private_goods_above40000
$('#private_goods_liability_above40000_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_liability_above40000');
	rootRef.set({		
		private_goods_liability_above40000_act:$('#private_goods_liability_above40000_act').val(),
		private_goods_liability_above40000_ll:$('#private_goods_liability_above40000_ll').val(),
		private_goods_liability_above40000_lpg:$('#private_goods_liability_above40000_lpg').val(),
		private_goods_liability_above40000_tax:$('#private_goods_liability_above40000_tax').val(),
		private_goods_liability_above40000_paod:$('#private_goods_liability_above40000_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Above 40000 KGs (Liability)')
})

//Package Policy

//private_goods_upto7500
$('#private_goods_package_upto7500_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_package_upto7500');
	rootRef.set({		
		private_goods_package_upto7500_dop_year1:$('#private_goods_package_upto7500_dop_year1').val(),
		private_goods_package_upto7500_dop_year2:$('#private_goods_package_upto7500_dop_year2').val(),
		private_goods_package_upto7500_dop_year3:$('#private_goods_package_upto7500_dop_year3').val(),
		private_goods_package_upto7500_ndp:$('#private_goods_package_upto7500_ndp').val(),
		private_goods_package_upto7500_paod:$('#private_goods_package_upto7500_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Upto 7500 KGs (Package)')
})

//private_goods_upto12000
$('#private_goods_package_upto12000_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_package_upto12000');
	rootRef.set({		
		private_goods_package_upto12000_dop_year1:$('#private_goods_package_upto12000_dop_year1').val(),
		private_goods_package_upto12000_dop_year2:$('#private_goods_package_upto12000_dop_year2').val(),
		private_goods_package_upto12000_dop_year3:$('#private_goods_package_upto12000_dop_year3').val(),
		private_goods_package_upto12000_ndp:$('#private_goods_package_upto12000_ndp').val(),
		private_goods_package_upto12000_paod:$('#private_goods_package_upto12000_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Upto 12000 KGs (Package)')
})

//private_goods_upto20000
$('#private_goods_package_upto20000_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_package_upto20000');
	rootRef.set({		
		private_goods_package_upto20000_dop_year1:$('#private_goods_package_upto20000_dop_year1').val(),
		private_goods_package_upto20000_dop_year2:$('#private_goods_package_upto20000_dop_year2').val(),
		private_goods_package_upto20000_dop_year3:$('#private_goods_package_upto20000_dop_year3').val(),
		private_goods_package_upto20000_ndp:$('#private_goods_package_upto20000_ndp').val(),
		private_goods_package_upto20000_paod:$('#private_goods_package_upto20000_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Upto 20000 KGs (Package)')
})

//private_goods_upto40000
$('#private_goods_package_upto40000_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_package_upto40000');
	rootRef.set({		
		private_goods_package_upto40000_dop_year1:$('#private_goods_package_upto40000_dop_year1').val(),
		private_goods_package_upto40000_dop_year2:$('#private_goods_package_upto40000_dop_year2').val(),
		private_goods_package_upto40000_dop_year3:$('#private_goods_package_upto40000_dop_year3').val(),
		private_goods_package_upto40000_ndp:$('#private_goods_package_upto40000_ndp').val(),
		private_goods_package_upto40000_paod:$('#private_goods_package_upto40000_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Upto 40000 KGs (Package)')
})

//private_goods_above40000
$('#private_goods_package_above40000_btn').click(function(){
var rootRef = firebase.database().ref().child('private_goods_package_above40000');
	rootRef.set({		
		private_goods_package_above40000_dop_year1:$('#private_goods_package_above40000_dop_year1').val(),
		private_goods_package_above40000_dop_year2:$('#private_goods_package_above40000_dop_year2').val(),
		private_goods_package_above40000_dop_year3:$('#private_goods_package_above40000_dop_year3').val(),
		private_goods_package_above40000_ndp:$('#private_goods_package_above40000_ndp').val(),
		private_goods_package_above40000_paod:$('#private_goods_package_above40000_paod').val()
	});
	toastr.success('Values saved!', 'Private Goods - Above 40000 KGs (Package)')
})

/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//private_goods_upto7500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_liability_upto7500');
	rootRef.on('value', function(snapshot){
			$('#private_goods_liability_upto7500_act').val(snapshot.child('private_goods_liability_upto7500_act').val());
			$('#private_goods_liability_upto7500_ll').val(snapshot.child('private_goods_liability_upto7500_ll').val());
			$('#private_goods_liability_upto7500_lpg').val(snapshot.child('private_goods_liability_upto7500_lpg').val());
			$('#private_goods_liability_upto7500_tax').val(snapshot.child('private_goods_liability_upto7500_tax').val());
			$('#private_goods_liability_upto7500_paod').val(snapshot.child('private_goods_liability_upto7500_paod').val());

			$("label[for='private_goods_liability_upto7500_act']").addClass('active');
			$("label[for='private_goods_liability_upto7500_ll']").addClass('active');
			$("label[for='private_goods_liability_upto7500_lpg']").addClass('active');
			$("label[for='private_goods_liability_upto7500_tax']").addClass('active');
			$("label[for='private_goods_liability_upto7500_paod']").addClass('active');
		})
});

//private_goods_upto12000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_liability_upto12000');
	rootRef.on('value', function(snapshot){
			$('#private_goods_liability_upto12000_act').val(snapshot.child('private_goods_liability_upto12000_act').val());
			$('#private_goods_liability_upto12000_ll').val(snapshot.child('private_goods_liability_upto12000_ll').val());
			$('#private_goods_liability_upto12000_lpg').val(snapshot.child('private_goods_liability_upto12000_lpg').val());			
			$('#private_goods_liability_upto12000_tax').val(snapshot.child('private_goods_liability_upto12000_tax').val());
			$('#private_goods_liability_upto12000_paod').val(snapshot.child('private_goods_liability_upto12000_paod').val());

			$("label[for='private_goods_liability_upto12000_act']").addClass('active');
			$("label[for='private_goods_liability_upto12000_ll']").addClass('active');
			$("label[for='private_goods_liability_upto12000_lpg']").addClass('active');
			$("label[for='private_goods_liability_upto12000_tax']").addClass('active');
			$("label[for='private_goods_liability_upto12000_paod']").addClass('active');
		})
});

//private_goods_upto20000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_liability_upto20000');
	rootRef.on('value', function(snapshot){
			$('#private_goods_liability_upto20000_act').val(snapshot.child('private_goods_liability_upto20000_act').val());
			$('#private_goods_liability_upto20000_ll').val(snapshot.child('private_goods_liability_upto20000_ll').val());
			$('#private_goods_liability_upto20000_lpg').val(snapshot.child('private_goods_liability_upto20000_lpg').val());
			$('#private_goods_liability_upto20000_tax').val(snapshot.child('private_goods_liability_upto20000_tax').val());
			$('#private_goods_liability_upto20000_paod').val(snapshot.child('private_goods_liability_upto20000_paod').val());

			$("label[for='private_goods_liability_upto20000_act']").addClass('active');
			$("label[for='private_goods_liability_upto20000_ll']").addClass('active');
			$("label[for='private_goods_liability_upto20000_lpg']").addClass('active');
			$("label[for='private_goods_liability_upto20000_tax']").addClass('active');
			$("label[for='private_goods_liability_upto20000_paod']").addClass('active');
		})
});

//private_goods_upto40000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_liability_upto40000');
	rootRef.on('value', function(snapshot){
			$('#private_goods_liability_upto40000_act').val(snapshot.child('private_goods_liability_upto40000_act').val());
			$('#private_goods_liability_upto40000_ll').val(snapshot.child('private_goods_liability_upto40000_ll').val());
			$('#private_goods_liability_upto40000_lpg').val(snapshot.child('private_goods_liability_upto40000_lpg').val());
			$('#private_goods_liability_upto40000_tax').val(snapshot.child('private_goods_liability_upto40000_tax').val());
			$('#private_goods_liability_upto40000_paod').val(snapshot.child('private_goods_liability_upto40000_paod').val());

			$("label[for='private_goods_liability_upto40000_act']").addClass('active');
			$("label[for='private_goods_liability_upto40000_ll']").addClass('active');
			$("label[for='private_goods_liability_upto40000_lpg']").addClass('active');
			$("label[for='private_goods_liability_upto40000_tax']").addClass('active');
			$("label[for='private_goods_liability_upto40000_paod']").addClass('active');
		})
});

//private_goods_above40000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_liability_above40000');
	rootRef.on('value', function(snapshot){
			$('#private_goods_liability_above40000_act').val(snapshot.child('private_goods_liability_above40000_act').val());
			$('#private_goods_liability_above40000_ll').val(snapshot.child('private_goods_liability_above40000_ll').val());
			$('#private_goods_liability_above40000_lpg').val(snapshot.child('private_goods_liability_above40000_lpg').val());
			$('#private_goods_liability_above40000_tax').val(snapshot.child('private_goods_liability_above40000_tax').val());
			$('#private_goods_liability_above40000_paod').val(snapshot.child('private_goods_liability_above40000_paod').val());

			$("label[for='private_goods_liability_above40000_act']").addClass('active');
			$("label[for='private_goods_liability_above40000_ll']").addClass('active');
			$("label[for='private_goods_liability_above40000_lpg']").addClass('active');
			$("label[for='private_goods_liability_above40000_tax']").addClass('active');
			$("label[for='private_goods_liability_above40000_paod']").addClass('active');
		})
});


//Package Policy

//private_goods_upto7500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_package_upto7500');
	rootRef.on('value', function(snapshot){
			$('#private_goods_package_upto7500_dop_year1').val(snapshot.child('private_goods_package_upto7500_dop_year1').val());
			$('#private_goods_package_upto7500_dop_year2').val(snapshot.child('private_goods_package_upto7500_dop_year2').val());
			$('#private_goods_package_upto7500_dop_year3').val(snapshot.child('private_goods_package_upto7500_dop_year3').val());
			$('#private_goods_package_upto7500_ndp').val(snapshot.child('private_goods_package_upto7500_ndp').val());
			$('#private_goods_package_upto7500_paod').val(snapshot.child('private_goods_package_upto7500_paod').val());

			$("label[for='private_goods_package_upto7500_dop_year1']").addClass('active');
			$("label[for='private_goods_package_upto7500_dop_year2']").addClass('active');
			$("label[for='private_goods_package_upto7500_dop_year3']").addClass('active');
			$("label[for='private_goods_package_upto7500_ndp']").addClass('active');
			$("label[for='private_goods_package_upto7500_paod']").addClass('active');
		})
});

//private_goods_upto12000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_package_upto12000');
	rootRef.on('value', function(snapshot){
			$('#private_goods_package_upto12000_dop_year1').val(snapshot.child('private_goods_package_upto12000_dop_year1').val());
			$('#private_goods_package_upto12000_dop_year2').val(snapshot.child('private_goods_package_upto12000_dop_year2').val());
			$('#private_goods_package_upto12000_dop_year3').val(snapshot.child('private_goods_package_upto12000_dop_year3').val());
			$('#private_goods_package_upto12000_ndp').val(snapshot.child('private_goods_package_upto12000_ndp').val());
			$('#private_goods_package_upto12000_paod').val(snapshot.child('private_goods_package_upto12000_paod').val());

			$("label[for='private_goods_package_upto12000_dop_year1']").addClass('active');
			$("label[for='private_goods_package_upto12000_dop_year2']").addClass('active');
			$("label[for='private_goods_package_upto12000_dop_year3']").addClass('active');
			$("label[for='private_goods_package_upto12000_ndp']").addClass('active');
			$("label[for='private_goods_package_upto12000_paod']").addClass('active');
		})
});

//private_goods_upto20000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_package_upto20000');
	rootRef.on('value', function(snapshot){
			$('#private_goods_package_upto20000_dop_year1').val(snapshot.child('private_goods_package_upto20000_dop_year1').val());
			$('#private_goods_package_upto20000_dop_year2').val(snapshot.child('private_goods_package_upto20000_dop_year2').val());
			$('#private_goods_package_upto20000_dop_year3').val(snapshot.child('private_goods_package_upto20000_dop_year3').val());
			$('#private_goods_package_upto20000_ndp').val(snapshot.child('private_goods_package_upto20000_ndp').val());
			$('#private_goods_package_upto20000_paod').val(snapshot.child('private_goods_package_upto20000_paod').val());

			$("label[for='private_goods_package_upto20000_dop_year1']").addClass('active');
			$("label[for='private_goods_package_upto20000_dop_year2']").addClass('active');
			$("label[for='private_goods_package_upto20000_dop_year3']").addClass('active');
			$("label[for='private_goods_package_upto20000_ndp']").addClass('active');
			$("label[for='private_goods_package_upto20000_paod']").addClass('active');
		})
});

//private_goods_upto40000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_package_upto40000');
	rootRef.on('value', function(snapshot){
			$('#private_goods_package_upto40000_dop_year1').val(snapshot.child('private_goods_package_upto40000_dop_year1').val());
			$('#private_goods_package_upto40000_dop_year2').val(snapshot.child('private_goods_package_upto40000_dop_year2').val());
			$('#private_goods_package_upto40000_dop_year3').val(snapshot.child('private_goods_package_upto40000_dop_year3').val());
			$('#private_goods_package_upto40000_ndp').val(snapshot.child('private_goods_package_upto40000_ndp').val());
			$('#private_goods_package_upto40000_paod').val(snapshot.child('private_goods_package_upto40000_paod').val());

			$("label[for='private_goods_package_upto40000_dop_year1']").addClass('active');
			$("label[for='private_goods_package_upto40000_dop_year2']").addClass('active');
			$("label[for='private_goods_package_upto40000_dop_year3']").addClass('active');
			$("label[for='private_goods_package_upto40000_ndp']").addClass('active');
			$("label[for='private_goods_package_upto40000_paod']").addClass('active');
		})
});

//private_goods_above40000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('private_goods_package_above40000');
	rootRef.on('value', function(snapshot){
			$('#private_goods_package_above40000_dop_year1').val(snapshot.child('private_goods_package_above40000_dop_year1').val());
			$('#private_goods_package_above40000_dop_year2').val(snapshot.child('private_goods_package_above40000_dop_year2').val());
			$('#private_goods_package_above40000_dop_year3').val(snapshot.child('private_goods_package_above40000_dop_year3').val());
			$('#private_goods_package_above40000_ndp').val(snapshot.child('private_goods_package_above40000_ndp').val());
			$('#private_goods_package_above40000_paod').val(snapshot.child('private_goods_package_above40000_paod').val());

			$("label[for='private_goods_package_above40000_dop_year1']").addClass('active');
			$("label[for='private_goods_package_above40000_dop_year2']").addClass('active');
			$("label[for='private_goods_package_above40000_dop_year3']").addClass('active');
			$("label[for='private_goods_package_above40000_ndp']").addClass('active');
			$("label[for='private_goods_package_above40000_paod']").addClass('active');
		})
});