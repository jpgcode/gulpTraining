'use strict';

var myModule = (function(){

	var init = function(){
		console.log('This script is done');
	};

	var logSomething = function(txt){
		console.log(txt);
	};


	var alertSomething = function(txt){
		alert(txt);
	};

	init();

	return {
		logSomething: logSomething,
		alertSomething: alertSomething
	}

})();