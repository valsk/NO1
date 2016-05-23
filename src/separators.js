'use strict';

function thousands_separators(num) {
number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,');

 }

module.exports = thousands_separators;
