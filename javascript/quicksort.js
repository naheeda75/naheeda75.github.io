//jshint esversion:8

async function Quick(){
    quickLegend();
    refresh();
    disableButtons();
    await quickSort(0,sortarray.length);
    for(var j=0;j<sortarray.length;j++){
      sortarray[j].style.backgroundColor = "#e52165";
    }
    enableButtons();
  }
  async function quickSort(l,h){
    if(l<h){
      var index = await partition(l,h);
      await quickSort(l,index);
      await quickSort(index+1,h);
    }
  }
  async function partition(l,h){
    var pivot = heightarray[l];
    var i=l,j=h;
    changeColor(sortarray[l],"red");
    while(i<j){
      do{
        i++;
        if(i<j){
          changeColor(sortarray[i],"orange");
          await Sleep(150/arrspeed);
          changeColor(sortarray[i],"#0d1137");
        }
      }while(i<h&&heightarray[i]<=pivot);
      await Sleep(150/arrspeed);
      if(i<j){
        changeColor(sortarray[i],"orange");
      }
      do{
        j--;
        changeColor(sortarray[j],"yellow");
        await Sleep(150/arrspeed);
        changeColor(sortarray[j],"#0d1137");
        await Sleep(150/arrspeed);
      }while(j>l&&heightarray[j]>pivot);
      await Sleep(150/arrspeed);
      changeColor(sortarray[j],"yellow");
      if(i<j){
        await Sleep(100/arrspeed);
        sortarray[i].style.height = heightarray[j]+"%";
        sortarray[j].style.height = heightarray[i]+"%";
        var temp = heightarray[i];
        heightarray[i] = heightarray[j];
        heightarray[j] = temp;
      }
      await Sleep(300/arrspeed);
      if(i<j){
        changeColor(sortarray[i],"#0d1137");
      }
      changeColor(sortarray[j],"#0d1137");
    }
    sortarray[l].style.height = heightarray[j]+"%";
    sortarray[j].style.height = heightarray[l]+"%";
    changeColor(sortarray[l],"#0d1137");
    changeColor(sortarray[j],"#e52165");
    await Sleep(300/arrspeed);
    var tem = heightarray[l];
    heightarray[l] = heightarray[j];
    heightarray[j] = tem;
    return j;
  }
  function quickLegend(){
    leg.style.display = "flex";
    $("#leftext").text("Larger than Pivot from Left");
    $("#rightext").text("Smaller than Pivot from Right");
    $("#currtext").text("Pivot Element");
  }

 