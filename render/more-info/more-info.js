import { vid_link, coverUrl, bannerUrl, fetchAppList, logoUrl,name } from "../../backend/steamApi.js";

//loads the default artwork of this page
window.onload = async function() {
    const query = sessionStorage.getItem('searchQuery');
    if (query) {
        await fetchAppList (query);
        document.getElementById("name_game").textContent = name
        document.getElementById('Banner').src = bannerUrl;
        // document.getElementById('Banner2').src = bannerUrl;
        document.getElementById('Logo').src = logoUrl;
        document.getElementById('Cover').src = coverUrl;
        document.getElementById('Vid').src = vid_link[0];
    } else {
        await fetchAppList ("Counter-Strike 2");
        document.getElementById("name_game").textContent = name
        document.getElementById('Banner').src = bannerUrl;
        // document.getElementById('Banner2').src = bannerUrl;
        document.getElementById('Logo').src = logoUrl;
        document.getElementById('Cover').src = coverUrl;
        document.getElementById('Vid').src = vid_link[0];
    }
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

window.addEventListener('beforeunload', function () {
    sessionStorage.removeItem('searchQuery');
});