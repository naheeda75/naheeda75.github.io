//jshint esversion:8
async function Merge()
{
    refresh();
    disableButtons();
    mergeLegend();
  await mergeSort(0,sortarray.length-1);
    enableButtons();
}
async function mergeSort(l,r){
  if(l < r){
    var mid = Math.floor((l+r)/2);
    changeColor(sortarray[mid],"yellow");
  await Sleep(100);
  await mergeSort(l,mid);
  await mergeSort(mid+1,r);
  await merge(l,mid,r);
  }
}
async function merge(l,mid,r){
  var n1 = mid-l+1;
  var n2 = r-mid;
  var Bh = [];
  var Ah = [];
  for(var i=0;i<n1;i++){
    Ah[i] = heightarray[i+l];
  }
  for(var j=0;j<n2;j++){
    Bh[j] = heightarray[mid+j+1];
  }
  i = 0;
  j = 0;
  k = l;
  while(i<n1&&j<n2){
    await Sleep(100/arrspeed);
    if (Ah[i] <= Bh[j])
         {
             heightarray[k] = Ah[i];
             sortarray[k].style.height = Ah[i]+"%";
             changeColor(sortarray[k],"#e52165");
             await Sleep(100/arrspeed);
             i++;
         }
         else
         {
             heightarray[k] = Bh[j];
             sortarray[k].style.height = Bh[j]+"%";
             changeColor(sortarray[k],"#e52165");
             await Sleep(100/arrspeed);
             j++;
         }
         k++;
  }
   while (i < n1)
   {
     heightarray[k] = Ah[i];
     sortarray[k].style.height = Ah[i]+"%";
     changeColor(sortarray[k],"orange");
     await Sleep(100/arrspeed);
       i++;
       k++;
   }

   while (j < n2)
   {
     heightarray[k] = Bh[j];
     sortarray[k].style.height = Bh[j]+"%";
     changeColor(sortarray[k],"turquoise");
     await Sleep(100/arrspeed);
       j++;
       k++;
   }
   for(var t=0;t<k;t++)
    {
        changeColor(sortarray[t],"#e52165");
    }
}
function mergeLegend(){
leg.style.display = "flex";
$("#leftext").text("Remaining Left Sub Elements");
$("#rightext").text("Middle Element of Sub-Array");
$("#currtext").text("Remaining Right Sub Elements");
}