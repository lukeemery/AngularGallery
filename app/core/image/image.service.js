angular.
	module('core.image').
	factory('Image', ['$resource',
		function($resource) {
			return $resource(
				'https://api.flickr.com/services/rest/', 
				{
					api_key: '1db09dc2dd5a83216352ddae47d51cc4', 
					format:'json', 
					jsoncallback: 'JSON_CALLBACK'
				}, 
				{ 
					public: { 
						method: 'JSONP', 
						params:{method: 'flickr.people.getPublicPhotos', user_id: '66025075@N06'} 
					},
					gallery: {
						method: 'JSONP', 
						params:{method: 'flickr.photosets.getPhotos', photoset_id: '72157671292592024', extras: 'url_m,url_q'} 
					},
					details: {
						method: 'JSONP',
						params: {method: 'flickr.photos.getInfo'}
					}
				}
			)
		}
	]);