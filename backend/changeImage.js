export function changeImage(id,url_toChange,url_toChangeTo) {
    var image = document.getElementById(id);
    if (image.src.match(url_toChange)) {
        image.src = url_toChangeTo;
    } 
    else {
        image.src = url_toChange;
    }
  } 