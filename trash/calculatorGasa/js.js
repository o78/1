 function changeValues() {  
			  let n1 = parseFloat(document.getElementById('n1').value);
			  let n2 = parseFloat(document.getElementById('n2').value);
			  let n3 = parseFloat(document.getElementById('n3').value);
			  let n4 = parseFloat(document.getElementById('n4').value);
			  let n5 = parseFloat(document.getElementById('n5').value);
			  let r1 = Math.round((n2-n3)*((n5/100)*n4));
			  let r2 = Math.round(r1*365) ;
			  let r3 =  Math.round(n1/r1);
			  if (r1 > 0) {
			    document.getElementById("r1").innerHTML = r1;
			    document.getElementById("r2").innerHTML = r2;
			    document.getElementById("r3").innerHTML = r3; }
			  } 