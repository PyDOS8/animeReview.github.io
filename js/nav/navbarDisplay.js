function closeNav(){
	document.getElementById("nav").style.display = "none";
	var hideNavLink = document.createElement("a");
	hideNavLink.href = "javascript:showNav();this.style.display='none';";
	hideNavLink.innerText = "Show navigation bar";
	document.body.appendChild(hideNavLink);
}
function showNav(){
  var showNavLink = document.createElement("a");
  showNavLink.href = "javascript:hideNav();this.style.display='none';";
  showNavLink.innerText = "Hide Navigation Bar";
  document.body.appendChild(showNavLink);
}