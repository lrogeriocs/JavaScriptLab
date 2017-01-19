//eventos.js
var tr =  document.getElementsByTagName("tr");
percorreArray(tr, function(tr){

	tr.addEventListener("click", function(){
		this.setAttribute("bgcolor" ,"blue"); 
		// body...
	})


	tr.addEventListener("mouseover", function(){
		this.setAttribute("bgcolor", "red"); 
		// body...
	})

	

})