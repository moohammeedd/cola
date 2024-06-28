let bars = document.getElementById('bars');
let ul = document.getElementById('ul');
bars.onclick = function(){
    ul.classList.toggle('hi')
}

let img = document.getElementById('img');
if(screen.width <900){
    img.style.width = '400px';
}