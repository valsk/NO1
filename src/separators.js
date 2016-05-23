'use strict';

function thousands_separators(num) {
var str_num = num + "";//转换成字符串
var ret_num = "";
var counter = 0;
for(var i=str_num.length-1;i>=0;i--)
{
ret_num = str_num.charAt(i) + ret_num;
if(str_num.charAt(i)==".")
{
counter = 0;
continue;
}
counter++;
if(i!=0&&str_num.charAt(i-1)!="."){
	if(counter==3){
		counter=0;
       ret_num = "," + ret_num;
}
}
return ret_num;
 }

module.exports = thousands_separators;
