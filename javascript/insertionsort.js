//jshint esversion:8
async function Insertion(){
    insertionLegend();
    refresh();
    await Sleep(50);
    disableButtons();
      for (var i = 1; i < sortarray.length; i++)
      {
          await Sleep(100/arrspeed);
          var key = heightarray[i];
          changeColor(sortarray[i-1],"#e52165");
          var j = i - 1;
          while (j >= 0 && heightarray[j] > key)
          {
              changeColor(sortarray[j+1],"yellow");
              changeColor(sortarray[j],"orange");
              await Sleep(200/arrspeed);
              sortarray[j + 1].style.height = sortarray[j].style.height;
              changeColor(sortarray[j],"#e52165");
              changeColor(sortarray[j+1],"#e52165");
              heightarray[j + 1] = heightarray[j];
              j = j - 1;
          }
          sortarray[j + 1].style.height = key+"%";
          changeColor(sortarray[j+1],"#e52165");
          heightarray[j+1] = key;
          await Sleep(100/arrspeed);
      }
      enableButtons();
  }
  function insertionLegend(){
    leg.style.display = "flex";
    $("#leftext").text("Left Element");
    $("#rightext").text("Right Element");
    $("#current").hide();
    $("#currtext").hide();
  
  }