//jshint esversion:8
async function Bubble(){
    bubbleLegend();
    refresh();
    var swapped = false;
    await Sleep(20);
    disableButtons();
    var n = sortarray.length;
          for (var i = 0; i < n-1; i++){
            swapped = false;
            for (var j = 0; j < n-i-1; j++){
              changeColor(sortarray[j],"orange");
              changeColor(sortarray[j+1],"yellow");
              await Sleep(100/arrspeed);
              if (heightarray[j] > heightarray[j+1])
              {
                await Sleep(100/arrspeed);
                  //Swap actual visual heights
                  var temp = sortarray[j].style.height;
                  sortarray[j].style.height = sortarray[j+1].style.height;
                  sortarray[j+1].style.height = temp;
                  //Swap height inside the heightarray
                  var tem = heightarray[j];
                  heightarray[j] = heightarray[j+1];
                  heightarray[j+1] = tem;
                  swapped = true;
              }
              changeColor(sortarray[j],"#0d1137");
            }
            changeColor(sortarray[n-i-1],"#e52165");
            await Sleep(100/arrspeed);
            if(swapped==false){
              for(var g=n-i-1;g>=0;g--){
                changeColor(sortarray[g],"#e52165");
              }
              break;
            }
          }
          changeColor(sortarray[0],"#e52165");
        enableButtons();
  }
  function bubbleLegend(){
    leg.style.display = "flex";
    $("#leftext").text("Current Largest Element");
    $("#rightext").text("Current Element");
    $("#current").hide();
    $("#currtext").hide();
  }