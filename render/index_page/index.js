import { fetchAppList, description, logoUrl, vid_link } from '../../backend/steamApi.js'; //function for retriving artworks
import { changeImage } from '../../backend/changeImage.js'

//loads the default artwork of this page
window.onload = async function() {
  await fetchAppList ("Counter-Strike 2");
  document.getElementById("summary").textContent = description;
  document.getElementById('Logo').src = logoUrl;
  document.getElementById('Vid').src = vid_link[0];
};

//function to define working of search
async function searchApp() {
  const query = document.querySelector('.search-input').value;
  sessionStorage.setItem('searchQuery', query);
  await fetchAppList(query);
  document.getElementById("summary").textContent = description;
  document.getElementById('Logo').src = logoUrl;
  document.getElementById('Vid').src = vid_link[0];
}

//adds function to search button and also a shortcut
document.querySelector('.search-btn').addEventListener('click', searchApp);
document.querySelector('.search-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    searchApp();
  }
});

//hamburger menu when screen is small
document.getElementById("menu-toggle").onclick = function () {
  var navLinks = document.querySelector(".nav__links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
};

//sends to download page
document.getElementById("download").onclick = function(){
  window.location.href = "../download_page/download.html"
}

//sends to library page
document.getElementById("lib").onclick = function(){
  window.location.href = "../library_page/library.html"
}

//sends to default home page
document.getElementById("home").onclick = function(){
  window.location.href = "index.html"
  sessionStorage.removeItem('searchQuery');
}

//sends to more-info page
document.getElementById("more-info").onclick = function(){
  window.location.href = "../more-info/more-info.html"
}

//functioning of the volume button
document.getElementById("vol_button").onclick = function() {
    changeImage("vol_button","../Assets/Icons/mute.png","../Assets/Icons/unmute.png")
    let video = document.getElementById("Vid");
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true; 
    }
}