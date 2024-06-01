document.getElementById("bell").onclick = function(){
    console.log("Search")
}

// this is for opening the menu in smol screens (it just works dont ask me)
document.getElementById("menu-toggle").onclick = function () {
    var navLinks = document.querySelector(".nav__links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
};

var video = document.getElementById("bak");
video.muted = true;
video.volume = 0.3; // Adjust volume between 0 and 1