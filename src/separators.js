'use strict';

function thousands_separators(num) {
    var s = num; /**获取小数型数据**/  
    s += "";  
    if (s.indexOf(".") == -1)  /**如果没有小数点，在后面补个小数点和0**/  
       if (/\.\d$/.test(s)) s += "0"; /**正则判断**/  
       while (/\d{4}(\.|,)/.test(s)) /**符合条件则进行替换**/  
          s = s.replace(/(\d)(\d{3}(\.|,))/, "$1,$2"); /**每隔3位添加一个**/  
          return s;  
 }

module.exports = thousands_separators;
