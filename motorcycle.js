//Send Values
$('#motorcycle_liability_upto75_btn').click(function(){
var rootRef = firebase.database().ref().child('motorcycle_liability_upto75');
	rootRef.set({		
		motorcycle_liability_upto75_act:$('#motorcycle_liability_upto75_act').val(),
		motorcycle_liability_upto75_tax:$('#motorcycle_liability_upto75_tax').val(),
		motorcycle_liability_upto75_paod:$('#motorcycle_liability_upto75_paod').val()
	});
})

//Receive Values
$(document).ready(function() { 
	var rootRef = firebase.database().ref().child('motorcycle_liability_upto75');
	rootRef.on('value', function(snapshot){
			var con=$('#motorcycle_liability_upto75_act').val(snapshot.child('motorcycle_liability_upto75/motorcycle_liability_upto75_act').val());
			console.log(con);
			$('#motorcycle_liability_upto75_tax').val(snapshot.child('motorcycle_liability_upto75/motorcycle_liability_upto75_tax').val());
			$('#motorcycle_liability_upto75_paod').val(snapshot.child('motorcycle_liability_upto75/motorcycle_liability_upto75_paod').val());
		})
});