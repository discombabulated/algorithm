(function(){
  var arr=[49,38,65,97,76,13,27,49,55,04],
  len=arr.length;
  for(var fraction=Math.floor(len/2);fraction>0;fraction=Math.floor(fraction/2)){
    for(var i=fraction;i<len;i++){
      for(var j=i-fraction;j>=0 && arr[j]>arr[fraction+j];j-=fraction){
        var temp=arr[j];
        arr[j]=arr[fraction+j];
        arr[fraction+j]=temp;
      }
    }
  }
  console.log(arr);
})();
