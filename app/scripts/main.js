require.config({
	paths: {
		jquery: '../components/jquery/jquery',
		bootstrap: 'vendor/bootstrap/bootstrap',
		//fitvids: '../components/fitvids/jquery.fitvids',
		//isotope: '../components/isotope/jquery.isotope',
		//quovolver: '../components/jquery-quovolver/jquery.quovolver',
		//popup: '../components/magnific-popup/dist/jquery.magnific-popup',
		form: '../components/jquery-form/jquery.form',
		validate: '../components/jquery-validation/jquery.validate',
		//recaptcha: 'vendor/recaptcha_ajax',
		gmap3: '../components/gmap3/gmap3',
		//flickr: 'vendor/jquery-flickr/jflickrfeed',
		//tweet: '../components/jquery-tweet/twitter/jquery.tweet',

		cycle2Core: '../components/jquery-cycle2/jquery.cycle2.core',
		cycle2Autoheight: '../components/jquery-cycle2/jquery.cycle2.autoheight',
		cycle2Caption: '../components/jquery-cycle2/jquery.cycle2.caption',
		cycle2Command: '../components/jquery-cycle2/jquery.cycle2.command',
		cycle2Hash: '../components/jquery-cycle2/jquery.cycle2.hash',
		cycle2Loader: '../components/jquery-cycle2/jquery.cycle2.loader',
		cycle2Pager: '../components/jquery-cycle2/jquery.cycle2.pager',
		cycle2Prevnext: '../components/jquery-cycle2/jquery.cycle2.prevnext',
		cycle2Progressive: '../components/jquery-cycle2/jquery.cycle2.progressive',
		cycle2Tmpl: '../components/jquery-cycle2/jquery.cycle2.tmpl',
		cycle2Swipe: '../components/jquery-cycle2/jquery.cycle2.swipe',

		leviate: 'vendor/leviate/leviate',
		leviateParallax: 'vendor/leviate/leviate.parallax',
		leviatePlugins: 'vendor/leviate/leviate.plugins'
	},
	shim: {
		bootstrap: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		/*fitvids: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		isotope: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		quovolver: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		popup: {
			deps: ['jquery'],
			exports: 'jquery'
		},*/
		form: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		validate: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		gmap3: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		/*flickr: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		tweet: {
			deps: ['jquery'],
			exports: 'jquery'
		},*/
		cycle2Core: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Autoheight: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Caption: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Command: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Hash: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Loader: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Pager: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Prevnext: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Progressive: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Tmpl: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		cycle2Swipe: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		leviatePlugins: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		leviateParallax: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		leviate: {
			deps: [
				'jquery',
				'leviatePlugins',
				'leviateParallax',
				/*'fitvids',
				'isotope',
				'quovolver',*/
				'form',
				'validate',
				//'recaptcha',
				'gmap3',
				/*'flickr',
				'tweet',*/
				'cycle2Core',
				'cycle2Autoheight',
				'cycle2Caption',
				'cycle2Command',
				'cycle2Hash',
				'cycle2Loader',
				'cycle2Pager',
				'cycle2Prevnext',
				'cycle2Progressive',
				'cycle2Tmpl',
				'cycle2Swipe'

			],
			exports: 'jquery'
		}
	}
});

require([
	'modules/app',
	'jquery',
	'bootstrap',
	/*'fitvids',
	'isotope',
	'quovolver',
	'popup',*/
	'form',
	'validate',
	//'recaptcha',
	'gmap3',
	//'flickr',
	//'tweet',
	'cycle2Core',
	'cycle2Autoheight',
	'cycle2Caption',
	'cycle2Command',
	'cycle2Hash',
	'cycle2Loader',
	'cycle2Pager',
	'cycle2Prevnext',
	'cycle2Progressive',
	'cycle2Tmpl',
	'cycle2Swipe',
	'leviatePlugins',
	'leviateParallax',
	'leviate'
],
function (app) {
	'use strict';

	app.init();
	//console.log('Running jQuery %s', $().jquery);
});
