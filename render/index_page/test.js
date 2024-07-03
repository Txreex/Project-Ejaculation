import { fetchAppList } from './backend.js';

let description, logoUrl, vid_link;

function changeImage(id,url_toChange,url_toChangeTo) {
  var image = document.getElementById(id);
  if (image.src.match(url_toChange)) {
      image.src = url_toChangeTo;
  } 
  else {
      image.src = url_toChange;
  }
} 

window.onload = async function() {
  const appDetails = await fetchAppList ("Counter-Strike 2");
  if (appDetails) {
    description = appDetails.description;
    logoUrl = appDetails.logoUrl;
    vid_link = appDetails.videos.map(video => video.link);
    document.getElementById("summary").textContent = description;
    document.getElementById('Logo').src = logoUrl;
    document.getElementById('Vid').src = vid_link[0];
  }
};

document.querySelector('.search-btn').addEventListener('click', searchApp);
document.querySelector('.search-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    searchApp();
  }
});

async function searchApp() {
  const query = document.querySelector('.search-input').value;
  const appDetails = await fetchAppList(query);
  if (appDetails) {
    description = appDetails.description;
    logoUrl = appDetails.logoUrl;
    vid_link = appDetails.videos.map(video => video.link);   
    document.getElementById("summary").textContent = description;
    document.getElementById('Logo').src = logoUrl;
    document.getElementById('Vid').src = vid_link[0];
  }
}

document.getElementById("menu-toggle").onclick = function () {
  var navLinks = document.querySelector(".nav__links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
};

document.getElementById("download").onclick = function(){
  window.location.href = "../download_page/download.html"
}

document.getElementById("lib").onclick = function(){
  window.location.href = "../library_page/library.html"
}

document.getElementById("home").onclick = function(){
  window.location.href = "index.html"
}

let vol = true;

document.getElementById("vol_button").onclick = function() {
    changeImage("vol_button","../Assets/Icons/mute.png","../Assets/Icons/unmute.png")
    let video = document.getElementById("bak");
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true; 
    }
}