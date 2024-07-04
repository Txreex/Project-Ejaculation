import { bannerUrl, fetchAppList } from "../../backend/steamApi.js";

//loads the default artwork of this page
window.onload = async function() {
    await fetchAppList ("Counter-Strike 2");
    document.getElementById('Banner').src = bannerUrl;
};

//sends to download page
document.getElementById("download").onclick = function(){
    window.location.href = "../download_page/download.html"
}

//sends to library page
document.getElementById("lib").onclick = function(){
    window.location.href = "../lib_page/library.html"
}

//sends to default home page
document.getElementById("home").onclick = function(){
    window.location.href = "../index_page/index.html"
}