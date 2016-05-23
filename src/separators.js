'use strict';

function thousands_separators(num) {
    var str_num = String(num);
	var len = str_num.length;
	var tail = str_num.slice(0, len % 3);
	tail = tail.strReverse();
	var reg=/d{3}/g;
	var list = str_num.strReverse().match(reg);
	list.push(tail);
	var res = list.join(',').strReverse();
	return res;

 }

module.exports = thousands_separators;
