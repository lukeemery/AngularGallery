angular.
	module('core.comment').
	factory('Comment', ['$resource',
		function($resource) {
			return $resource('http://api.dummy.me/v1/comments/:id');
		}
	]);