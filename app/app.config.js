angular.
	module('galleryApp').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');
			
			$routeProvider.
				when('/gallery', {
					template: '<image-list></image-list>'
				}).
				when('/gallery/:imageId', {
					template: '<image-detail></image-detail>'
				}).
				otherwise('/gallery');
		}
	]);