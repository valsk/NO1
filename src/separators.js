'use strict';

function thousands_separators(num) {
 if(!/^(\+|-)?\d+(\.\d+)?$/.test(num))
  {alert("wrong!"); 
   return num;}
  var re = new RegExp().compile("(\\d)(\\d{3})(,|\\.|$)");
  num += ""; 
  while(re.test(num))
    num = num.replace(re, "$1,$2$3")
  return num;
 }

module.exports = thousands_separators;
