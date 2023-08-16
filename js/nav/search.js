function search(){
  var searchValue = document.getElementById("search").value;
  if(searchValue != ""){
	var searchResult = document.createElement("p");
	searchResult.innerHTML = "<p>Link for <a href='" + searchValue + "'>" + searchValue + "</a></p>";
	searchResult.style.textAlign = "center";
        searchResult.style.color = "orange";
	document.body.appendChild(searchResult);
  }else{
    var emptyValue = document.createElement("h6");
    emptyValue.innerText = "Enter value in the search bar!";
    emptyValue.style.textAlign = "center";
    emptyValue.style.color = "orange";
    document.body.appendChild(emptyValue);
  }
}