//jshint esversion:8
var leg = document.getElementById("legend");
var ar_speed = document.getElementById("arspeed");
var arrspeed = document.getElementById("arspeed").value;
arrspeed = arrspeed*arrspeed;
var mainarrspeed = document.getElementById("arspeed");
var siz = 2;
document.getElementById("arspeed").addEventListener("input",()=>{
  arrspeed = mainarrspeed.value*mainarrspeed.value;
});
document.getElementById("arsize").addEventListener("input",()=>{
  generateArray();
});

function reset(){
    generateArray();
}

var sortarray = [];
var heightarray = [];
var ar_size = document.getElementById("arsize");
var butt = document.querySelectorAll("button");
window.onload=update_array_size();
function generateArray(){
  sortarray = [];
  heightarray = [];
  leg.style.display = "none";
  var arrsize = parseInt(document.getElementById("arsize").value);
  while(document.getElementById("visual").hasChildNodes()){
    document.getElementById("visual").removeChild(document.getElementById("visual").childNodes[0]);
  }
  var w = window.innerWidth|| document.documentElement.clientWidth || document.body.clientWidth;
  if(w<750){
    siz = 0.5;
    console.log(w);
  }
  else{
    siz = 1.7;
    console.log(w);
  }
  console.log(siz);
  for(var i=0;i<arrsize*siz;i++){
    var node = document.createElement("div");
    node.classList.add("ev");
    var ran = Math.floor(Math.random()*89)+1;
    node.style.backgroundColor = "#0d1137";
    if(w<750){
      node.style.width = "50px";
    }
    else{
      node.style.width = (400/arrsize)+"px";
    }
    var size = ran;
    node.style.height = size+"%";
    sortarray.push(node);
    heightarray.push(size);
    document.getElementById("visual").appendChild(node);
  }
}
function update_array_size()
{

    generateArray();
}


function disableButtons(){
  for(var i=0;i<butt.length;i++){
    butt[i].disabled = true;
  }
  ar_size.disabled = true;
}
function enableButtons(){
  for(var i=0;i<butt.length;i++){
    butt[i].disabled = false;
  }

  ar_size.disabled = false;
  ar_speed.disabled = false;
}
function Sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function changeColor(g,col){
  g.style.backgroundColor = col;
}
function refresh(){
  for(var j=0;j<sortarray.length;j++){
    sortarray[j].style.backgroundColor = "#0d1137";
  }
}