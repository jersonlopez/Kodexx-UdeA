var j = 0
var x

function crono(){
	 j = j+1
	//console.log(j)

}

function tiempo(){
	var sec
	var minaux = j/60
	var min = Math.floor(minaux)
	if (j>60){
		sec = j%60
	} 
	else if(j==60){
		sec="00"
	}else{
		sec = j
	}
	console.log("Han pasado "+min+":"+sec+" desde que se prendio el cronometro.")
}

function incio() {
	// body...
	 x = setInterval(crono,1000)
}

  /*var producto = document.getElementById('x').value;
  var anterior=document.getElementById('y').innerHTML;
  document.getElementById('y').innerHTML = anterior+'<li>'+producto+'</li>';
*/
/*
function mercado(){
  var producto = document.getElementById('x').value;
  var anterior=document.getElementById('y').innerHTML;
     document.getElementById('y').innerHTML = anterior+'<li>'+producto+'</li>';
}

function pitagoras(callback) {
	// body...
	callback();
}


pitagoras(function () {
	// body...
	console.log("esteoy en call")
})
*/
