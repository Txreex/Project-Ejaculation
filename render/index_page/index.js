function changImage(id,url_toChange,url_toChangeTo) {
    var image = document.getElementById(id);
    if (image.src.match(url_toChange)) {
        image.src = url_toChangeTo;
    } 
    else {
        image.src = url_toChange;
    }
}

document.getElementById("bell").onclick = function(){
    console.log("Search")
}

document.getElementById("download").onclick = function(){
    window.location.href = "../download_page/download.html"
}

document.getElementById("lib").onclick = function(){
    window.location.href = "../library_page/library.html"
}

document.getElementById("home").onclick = function(){
    window.location.href = "index.html"
}

// this is for opening the menu in smol screens (it just works dont ask me)
document.getElementById("menu-toggle").onclick = function () {
    var navLinks = document.querySelector(".nav__links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
};

// function changeIcon() {
//     if (document.getElementById("vol_button").src == "../Assets/Icons/unmute.png") {
//         document.getElementById("vol_").src = "../Assets/Icons/mute.png";
//     } else {
//         document.getElementById("vol_button").src = "../Assets/Icons/unmute.png";
//     }
// }

// document.getElementById("vol_button").onClick = function() {
//     changeIcon();
// }

document.getElementById("vol_button").onclick = function() {
    changImage("vol_button","../Assets/Icons/unmute.png","../Assets/Icons/mute.png")
}
