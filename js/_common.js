function myFunction() {
    var navbar = document.getElementById("navbar");
    
    if (navbar.className === "nav-transition") {
        navbar.className += " menu";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    } else {
        navbar.className = "nav-transition";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
        document.getElementById("threeline-icon").style.textDecoration = "none";
    }
}