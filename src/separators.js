'use strict';

function thousands_separators(num) {
 var str=num.toString();
 var newStr=new Array(str.length+parseInt(str.length/3));   
  var strArray=str.split("");
  newStr[newStr.length-1]=strArray[strArray.length-1];   
  var currentIndex=strArray.length-1;   
  for(var i=newStr.length-1;i>=0;i--){   
    if((newStr.length-i)%4==0){   
      newStr[i]=",";   
    }  
    else{   
      newStr[i]=strArray[currentIndex--];   
    }   
  }   
  return newStr.join("") 
 }

module.exports = thousands_separators;
