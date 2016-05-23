'use strict';

function thousands_separators(num) {
      var s=num.toString();
      s=s.replace(/^(\d*)$/,"$1.");
        s=(s+).replace(/(\d*\.\d\d)\d*/,"$1");
        s=s.replace(".",",");
        var re=/(\d)(\d{3},)/;
        while(re.test(s))
                s=s.replace(re,"$1,$2");
        s=s.replace(/,(\d\d)$/,".$1");
        return s.replace(/^\./,"0.")

 }

module.exports = thousands_separators;
