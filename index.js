document.getElementById("my_h1").textContent = "Ligma balls";

let count = 0;

document.getElementById('increase').onclick = function(){
    count++;
    document.getElementById('count').textContent = count;
}
document.getElementById('decrease').onclick = function(){
    count--;
    document.getElementById('count').textContent = count;
}
document.getElementById('reset').onclick = function(){
    count = 0;
    document.getElementById('count').textContent = count;
}

