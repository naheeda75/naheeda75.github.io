//jshint esversion:8
async function Selection(){
    selectionLegend();
    refresh();
    await Sleep(50);
    disableButtons();
    // Do selection sort
    for(var f=0;f<sortarray.length;f++){
      //Check arrspeed at every iteration for user speed change
      //Change color of element being checked against others to red
      changeColor(sortarray[f],"#0d1137");
  
      await Sleep(100/arrspeed);
  
      var min = f;
      //Check other elements for the smallest one
      for(var j=f+1;j<sortarray.length;j++){
        changeColor(sortarray[j],"orange");
        await Sleep(100/arrspeed);
        changeColor(sortarray[j],"#0d1137");
        if(heightarray[j]<heightarray[min]){
          min = j;
        }
      }
      await Sleep(100/arrspeed);
      var tem = sortarray[min].style.height;//1
      changeColor(sortarray[min],"yellow");
      await Sleep(500);
      changeColor(sortarray[min],"#0d1137");
      sortarray[min].style.height = sortarray[f].style.height;//2
      await Sleep(100/arrspeed);
      sortarray[f].style.height = tem;//3
      changeColor(sortarray[f],"#e52165");
  
      var temp = heightarray[min];
      heightarray[min]= heightarray[f];
      heightarray[f]= temp;
    }
    enableButtons();
  }
  function selectionLegend(){
    leg.style.display = "flex";
    $("#leftext").text("Current element");
    $("#rightext").text("Smallest element in Unsorted Array");
    $("#current").hide();
    $("#currtext").hide();
  }