function search(){
	//Get the value from the searchbar 
	var searchValue = document.getElementById("search").value;
	
	if(!searchValue == ""){
		//Create a link to allow them to go to the requested page
		var searchResult = document.createElement("a");
		searchResult.href = searchValue;
		searchResult.innerText = searchValue;
		document.body.appendChild(searchResult);
   }else{
     alert("Enter something in the search bar!");
	}  
}