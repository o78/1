 function changeValues() {  
			  let n0 = parseFloat(document.getElementById('n0').value);
			  let n1 = parseFloat(document.getElementById('n1').value);
			  let n2 = parseFloat(document.getElementById('n2').value);
			  let n3 = parseFloat(document.getElementById('n3').value);
			  let n4 = parseFloat(document.getElementById('n4').value);
			  let r0 = Math.round((n1-n2)*((n4/100)*n3));
			  let r1 = Math.round(r0*365) ;
			  let r2 =  Math.round(n0/r0);
			  if (r0 > 0) {
			    document.getElementById("r0").innerHTML = r0;
			    document.getElementById("r1").innerHTML = r1;
			    document.getElementById("r2").innerHTML = r2; }
			  else {
				    document.getElementById("r0").innerHTML = '0';
			    document.getElementById("r1").innerHTML = '0';
			    document.getElementById("r2").innerHTML = '0';
				  }
			  } 
