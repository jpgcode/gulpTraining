'use strict';


//Compare the text forwards and backwards 
//IF both are equals return true if NOT return false

var isPalindrome = (txt) => 
	txt.prepTxt() === [...txt.prepTxt()].reverse().join('');

const prepTxt = txt => txt.replace(/[^A-Za-z0-9]/g, '').toLowerCase();