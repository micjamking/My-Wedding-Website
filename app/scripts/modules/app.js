/*global define */

define('modernizr', function () {
	'use strict';
	return window.Modernizr;
});

define(['modernizr', 'jquery'], function (Modernizr, $) {
	'use strict';

	var svg = function(){
		if (!Modernizr.svg) {
			$('.logo img').attr('src', 'images/logo.png');
		}
	};

	return {
		init: function(){
			svg();
		}
	};
});
