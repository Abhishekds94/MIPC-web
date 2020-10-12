/* Send Values to Firebase DB */

//Liability Policy

//public_goods_upto7500
$('#public_goods_liability_upto7500_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_liability_upto7500');
	rootRef.set({		
		public_goods_liability_upto7500_act:$('#public_goods_liability_upto7500_act').val(),
		public_goods_liability_upto7500_ll:$('#public_goods_liability_upto7500_ll').val(),
		public_goods_liability_upto7500_lpg:$('#public_goods_liability_upto7500_lpg').val(),
		public_goods_liability_upto7500_tax:$('#public_goods_liability_upto7500_tax').val(),
		public_goods_liability_upto7500_paod:$('#public_goods_liability_upto7500_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Upto 7500 KGs (Liability)')
})

//public_goods_upto12000
$('#public_goods_liability_upto12000_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_liability_upto12000');
	rootRef.set({		
		public_goods_liability_upto12000_act:$('#public_goods_liability_upto12000_act').val(),
		public_goods_liability_upto12000_ll:$('#public_goods_liability_upto12000_ll').val(),
		public_goods_liability_upto12000_lpg:$('#public_goods_liability_upto12000_lpg').val(),
		public_goods_liability_upto12000_tax:$('#public_goods_liability_upto12000_tax').val(),
		public_goods_liability_upto12000_paod:$('#public_goods_liability_upto12000_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Upto 12000 KGs (Liability)')
})

//public_goods_upto20000
$('#public_goods_liability_upto20000_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_liability_upto20000');
	rootRef.set({		
		public_goods_liability_upto20000_act:$('#public_goods_liability_upto20000_act').val(),
		public_goods_liability_upto20000_ll:$('#public_goods_liability_upto20000_ll').val(),
		public_goods_liability_upto20000_lpg:$('#public_goods_liability_upto20000_lpg').val(),
		public_goods_liability_upto20000_tax:$('#public_goods_liability_upto20000_tax').val(),
		public_goods_liability_upto20000_paod:$('#public_goods_liability_upto20000_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Upto 20000 KGs (Liability)')
})

//public_goods_upto40000
$('#public_goods_liability_upto40000_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_liability_upto40000');
	rootRef.set({		
		public_goods_liability_upto40000_act:$('#public_goods_liability_upto40000_act').val(),
		public_goods_liability_upto40000_ll:$('#public_goods_liability_upto40000_ll').val(),
		public_goods_liability_upto40000_lpg:$('#public_goods_liability_upto40000_lpg').val(),
		public_goods_liability_upto40000_tax:$('#public_goods_liability_upto40000_tax').val(),
		public_goods_liability_upto40000_paod:$('#public_goods_liability_upto40000_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Upto 40000 KGs (Liability)')
})

//Package Policy

//public_goods_upto7500
$('#public_goods_package_upto7500_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_package_upto7500');
	rootRef.set({		
		public_goods_package_upto7500_dop_year1:$('#public_goods_package_upto7500_dop_year1').val(),
		public_goods_package_upto7500_dop_year2:$('#public_goods_package_upto7500_dop_year2').val(),
		public_goods_package_upto7500_dop_year3:$('#public_goods_package_upto7500_dop_year3').val(),
		public_goods_package_upto7500_ndp:$('#public_goods_package_upto7500_ndp').val(),
		public_goods_package_upto7500_paod:$('#public_goods_package_upto7500_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Upto 7500 KGs (Package)')
})

//public_goods_upto12000
$('#public_goods_package_upto12000_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_package_upto12000');
	rootRef.set({		
		public_goods_package_upto12000_dop_year1:$('#public_goods_package_upto12000_dop_year1').val(),
		public_goods_package_upto12000_dop_year2:$('#public_goods_package_upto12000_dop_year2').val(),
		public_goods_package_upto12000_dop_year3:$('#public_goods_package_upto12000_dop_year3').val(),
		public_goods_package_upto12000_ndp:$('#public_goods_package_upto12000_ndp').val(),
		public_goods_package_upto12000_paod:$('#public_goods_package_upto12000_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Upto 12000 KGs (Package)')
})

//public_goods_upto20000
$('#public_goods_package_upto20000_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_package_upto20000');
	rootRef.set({		
		public_goods_package_upto20000_dop_year1:$('#public_goods_package_upto20000_dop_year1').val(),
		public_goods_package_upto20000_dop_year2:$('#public_goods_package_upto20000_dop_year2').val(),
		public_goods_package_upto20000_dop_year3:$('#public_goods_package_upto20000_dop_year3').val(),
		public_goods_package_upto20000_ndp:$('#public_goods_package_upto20000_ndp').val(),
		public_goods_package_upto20000_paod:$('#public_goods_package_upto20000_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Upto 20000 KGs (Package)')
})

//public_goods_upto40000
$('#public_goods_package_upto40000_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_package_upto40000');
	rootRef.set({		
		public_goods_package_upto40000_dop_year1:$('#public_goods_package_upto40000_dop_year1').val(),
		public_goods_package_upto40000_dop_year2:$('#public_goods_package_upto40000_dop_year2').val(),
		public_goods_package_upto40000_dop_year3:$('#public_goods_package_upto40000_dop_year3').val(),
		public_goods_package_upto40000_ndp:$('#public_goods_package_upto40000_ndp').val(),
		public_goods_package_upto40000_paod:$('#public_goods_package_upto40000_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Upto 40000 KGs (Package)')
})

//public_goods_above40000
$('#public_goods_package_above40000_btn').click(function(){
var rootRef = firebase.database().ref().child('public_goods_package_above40000');
	rootRef.set({		
		public_goods_package_upto20000_dop_year1:$('#public_goods_package_above40000_dop_year1').val(),
		public_goods_package_upto20000_dop_year2:$('#public_goods_package_above40000_dop_year2').val(),
		public_goods_package_upto20000_dop_year3:$('#public_goods_package_above40000_dop_year3').val(),
		public_goods_package_upto20000_ndp:$('#public_goods_package_above40000_ndp').val(),
		public_goods_package_upto20000_paod:$('#public_goods_package_above40000_paod').val()
	});
	toastr.success('Values saved!', 'Public Goods - Above 40000 KGs (Package)')
})

/*=======================================================================================================================*/


/* Receive Values from Firebase DB */

//Liability Policy

//public_goods_upto7500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_liability_upto7500');
	rootRef.on('value', function(snapshot){
			$('#public_goods_liability_upto7500_act').val(snapshot.child('public_goods_liability_upto7500_act').val());
			$('#public_goods_liability_upto7500_ll').val(snapshot.child('public_goods_liability_upto7500_ll').val());
			$('#public_goods_liability_upto7500_lpg').val(snapshot.child('public_goods_liability_upto7500_lpg').val());
			$('#public_goods_liability_upto7500_tax').val(snapshot.child('public_goods_liability_upto7500_tax').val());
			$('#public_goods_liability_upto7500_paod').val(snapshot.child('public_goods_liability_upto7500_paod').val());

			$("label[for='public_goods_liability_upto7500_act']").addClass('active');
			$("label[for='public_goods_liability_upto7500_ll']").addClass('active');
			$("label[for='public_goods_liability_upto7500_lpg']").addClass('active');
			$("label[for='public_goods_liability_upto7500_tax']").addClass('active');
			$("label[for='public_goods_liability_upto7500_paod']").addClass('active');
		})
});

//public_goods_upto12000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_liability_upto12000');
	rootRef.on('value', function(snapshot){
			$('#public_goods_liability_upto12000_act').val(snapshot.child('public_goods_liability_upto12000_act').val());
			$('#public_goods_liability_upto12000_ll').val(snapshot.child('public_goods_liability_upto12000_ll').val());
			$('#public_goods_liability_upto12000_lpg').val(snapshot.child('public_goods_liability_upto12000_lpg').val());			
			$('#public_goods_liability_upto12000_tax').val(snapshot.child('public_goods_liability_upto12000_tax').val());
			$('#public_goods_liability_upto12000_paod').val(snapshot.child('public_goods_liability_upto12000_paod').val());

			$("label[for='public_goods_liability_upto12000_act']").addClass('active');
			$("label[for='public_goods_liability_upto12000_ll']").addClass('active');
			$("label[for='public_goods_liability_upto12000_lpg']").addClass('active');
			$("label[for='public_goods_liability_upto12000_tax']").addClass('active');
			$("label[for='public_goods_liability_upto12000_paod']").addClass('active');
		})
});

//public_goods_upto20000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_liability_upto20000');
	rootRef.on('value', function(snapshot){
			$('#public_goods_liability_upto20000_act').val(snapshot.child('public_goods_liability_upto20000_act').val());
			$('#public_goods_liability_upto20000_ll').val(snapshot.child('public_goods_liability_upto20000_ll').val());
			$('#public_goods_liability_upto20000_lpg').val(snapshot.child('public_goods_liability_upto20000_lpg').val());
			$('#public_goods_liability_upto20000_tax').val(snapshot.child('public_goods_liability_upto20000_tax').val());
			$('#public_goods_liability_upto20000_paod').val(snapshot.child('public_goods_liability_upto20000_paod').val());

			$("label[for='public_goods_liability_upto20000_act']").addClass('active');
			$("label[for='public_goods_liability_upto20000_ll']").addClass('active');
			$("label[for='public_goods_liability_upto20000_lpg']").addClass('active');
			$("label[for='public_goods_liability_upto20000_tax']").addClass('active');
			$("label[for='public_goods_liability_upto20000_paod']").addClass('active');
		})
});

//public_goods_upto40000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_liability_upto40000');
	rootRef.on('value', function(snapshot){
			$('#public_goods_liability_upto40000_act').val(snapshot.child('public_goods_liability_upto40000_act').val());
			$('#public_goods_liability_upto40000_ll').val(snapshot.child('public_goods_liability_upto40000_ll').val());
			$('#public_goods_liability_upto40000_lpg').val(snapshot.child('public_goods_liability_upto40000_lpg').val());
			$('#public_goods_liability_upto40000_tax').val(snapshot.child('public_goods_liability_upto40000_tax').val());
			$('#public_goods_liability_upto40000_paod').val(snapshot.child('public_goods_liability_upto40000_paod').val());

			$("label[for='public_goods_liability_upto40000_act']").addClass('active');
			$("label[for='public_goods_liability_upto40000_ll']").addClass('active');
			$("label[for='public_goods_liability_upto40000_lpg']").addClass('active');
			$("label[for='public_goods_liability_upto40000_tax']").addClass('active');
			$("label[for='public_goods_liability_upto40000_paod']").addClass('active');
		})
});

//public_goods_above40000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_liability_above40000');
	rootRef.on('value', function(snapshot){
			$('#public_goods_liability_above40000_act').val(snapshot.child('public_goods_liability_above40000_act').val());
			$('#public_goods_liability_above40000_ll').val(snapshot.child('public_goods_liability_above40000_ll').val());
			$('#public_goods_liability_above40000_lpg').val(snapshot.child('public_goods_liability_above40000_lpg').val());
			$('#public_goods_liability_above40000_tax').val(snapshot.child('public_goods_liability_above40000_tax').val());
			$('#public_goods_liability_above40000_paod').val(snapshot.child('public_goods_liability_above40000_paod').val());

			$("label[for='public_goods_liability_above40000_act']").addClass('active');
			$("label[for='public_goods_liability_above40000_ll']").addClass('active');
			$("label[for='public_goods_liability_above40000_lpg']").addClass('active');
			$("label[for='public_goods_liability_above40000_tax']").addClass('active');
			$("label[for='public_goods_liability_above40000_paod']").addClass('active');
		})
});


//Package Policy

//public_goods_upto7500
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_package_upto7500');
	rootRef.on('value', function(snapshot){
			$('#public_goods_package_upto7500_dop_year1').val(snapshot.child('public_goods_package_upto7500_dop_year1').val());
			$('#public_goods_package_upto7500_dop_year2').val(snapshot.child('public_goods_package_upto7500_dop_year2').val());
			$('#public_goods_package_upto7500_dop_year3').val(snapshot.child('public_goods_package_upto7500_dop_year3').val());
			$('#public_goods_package_upto7500_ndp').val(snapshot.child('public_goods_package_upto7500_ndp').val());
			$('#public_goods_package_upto7500_paod').val(snapshot.child('public_goods_package_upto7500_paod').val());

			$("label[for='public_goods_package_upto7500_dop_year1']").addClass('active');
			$("label[for='public_goods_package_upto7500_dop_year2']").addClass('active');
			$("label[for='public_goods_package_upto7500_dop_year3']").addClass('active');
			$("label[for='public_goods_package_upto7500_ndp']").addClass('active');
			$("label[for='public_goods_package_upto7500_paod']").addClass('active');
		})
});

//public_goods_upto12000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_package_upto12000');
	rootRef.on('value', function(snapshot){
			$('#public_goods_package_upto12000_dop_year1').val(snapshot.child('public_goods_package_upto12000_dop_year1').val());
			$('#public_goods_package_upto12000_dop_year2').val(snapshot.child('public_goods_package_upto12000_dop_year2').val());
			$('#public_goods_package_upto12000_dop_year3').val(snapshot.child('public_goods_package_upto12000_dop_year3').val());
			$('#public_goods_package_upto12000_ndp').val(snapshot.child('public_goods_package_upto12000_ndp').val());
			$('#public_goods_package_upto12000_paod').val(snapshot.child('public_goods_package_upto12000_paod').val());

			$("label[for='public_goods_package_upto12000_dop_year1']").addClass('active');
			$("label[for='public_goods_package_upto12000_dop_year2']").addClass('active');
			$("label[for='public_goods_package_upto12000_dop_year3']").addClass('active');
			$("label[for='public_goods_package_upto12000_ndp']").addClass('active');
			$("label[for='public_goods_package_upto12000_paod']").addClass('active');
		})
});

//public_goods_upto20000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_package_upto20000');
	rootRef.on('value', function(snapshot){
			$('#public_goods_package_upto20000_dop_year1').val(snapshot.child('public_goods_package_upto20000_dop_year1').val());
			$('#public_goods_package_upto20000_dop_year2').val(snapshot.child('public_goods_package_upto20000_dop_year2').val());
			$('#public_goods_package_upto20000_dop_year3').val(snapshot.child('public_goods_package_upto20000_dop_year3').val());
			$('#public_goods_package_upto20000_ndp').val(snapshot.child('public_goods_package_upto20000_ndp').val());
			$('#public_goods_package_upto20000_paod').val(snapshot.child('public_goods_package_upto20000_paod').val());

			$("label[for='public_goods_package_upto20000_dop_year1']").addClass('active');
			$("label[for='public_goods_package_upto20000_dop_year2']").addClass('active');
			$("label[for='public_goods_package_upto20000_dop_year3']").addClass('active');
			$("label[for='public_goods_package_upto20000_ndp']").addClass('active');
			$("label[for='public_goods_package_upto20000_paod']").addClass('active');
		})
});

//public_goods_upto40000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_package_upto40000');
	rootRef.on('value', function(snapshot){
			$('#public_goods_package_upto40000_dop_year1').val(snapshot.child('public_goods_package_upto40000_dop_year1').val());
			$('#public_goods_package_upto40000_dop_year2').val(snapshot.child('public_goods_package_upto40000_dop_year2').val());
			$('#public_goods_package_upto40000_dop_year3').val(snapshot.child('public_goods_package_upto40000_dop_year3').val());
			$('#public_goods_package_upto40000_ndp').val(snapshot.child('public_goods_package_upto40000_ndp').val());
			$('#public_goods_package_upto40000_paod').val(snapshot.child('public_goods_package_upto40000_paod').val());

			$("label[for='public_goods_package_upto40000_dop_year1']").addClass('active');
			$("label[for='public_goods_package_upto40000_dop_year2']").addClass('active');
			$("label[for='public_goods_package_upto40000_dop_year3']").addClass('active');
			$("label[for='public_goods_package_upto40000_ndp']").addClass('active');
			$("label[for='public_goods_package_upto40000_paod']").addClass('active');
		})
});

//public_goods_above40000
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('public_goods_package_above40000');
	rootRef.on('value', function(snapshot){
			$('#public_goods_package_above40000_dop_year1').val(snapshot.child('public_goods_package_above40000_dop_year1').val());
			$('#public_goods_package_above40000_dop_year2').val(snapshot.child('public_goods_package_above40000_dop_year2').val());
			$('#public_goods_package_above40000_dop_year3').val(snapshot.child('public_goods_package_above40000_dop_year3').val());
			$('#public_goods_package_above40000_ndp').val(snapshot.child('public_goods_package_above40000_ndp').val());
			$('#public_goods_package_above40000_paod').val(snapshot.child('public_goods_package_above40000_paod').val());

			$("label[for='public_goods_package_above40000_dop_year1']").addClass('active');
			$("label[for='public_goods_package_above40000_dop_year2']").addClass('active');
			$("label[for='public_goods_package_above40000_dop_year3']").addClass('active');
			$("label[for='public_goods_package_above40000_ndp']").addClass('active');
			$("label[for='public_goods_package_above40000_paod']").addClass('active');
		})
});