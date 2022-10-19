	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   document.getElementById("qp").outerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", "homemedia/qp.svg", true);
	xhttp.send(); 
	var qp = [];
function lazyProducts() {

	var list = document.querySelectorAll('.ptsel'); 

	for(var i = 0; i < list.length; i++) {
	list[i].onclick = function() {
		console.log(this.id);
		switchElementStatus(this);
	}

	}
	
	function switchElementStatus(el) {
		if(el.style.opacity < 1) {
			el.style.opacity = 1;
			qp.push(el.id);
			document.getElementById('InterestedInForm').value = qp.join(',');
		}else {
			el.style.opacity = 0.4;
			qp = qp.filter(function(e) { return e !== el.id });
			document.getElementById('InterestedInForm').value = qp.join(',');
		}
	}

}

setTimeout(lazyProducts, 5000);
